package main

import (
	"bufio"
	"bytes"
	"encoding/json"
	"errors"
	"fmt"
	"io"
	"io/ioutil"
	"log"
	"net/http"
	"os"
	"strconv"
	"strings"
	"text/template"

	"github.com/class/SeniorProject/importer/backend/formatter"
)

type Meta struct {
	VersionID   int    `json:"versionId"`
	LastUpdated string `json:"lastUpdated"`
}

type Contact struct {
	Name string `json:"name"`
}

type Designation struct {
	Language string `json:"language"`
}

type Concept struct {
	Code        string        `json:"code"`
	Abstract    bool          `json:"abstract"`
	Display     string        `json:"display"`
	Definition  string        `json:"definition"`
	Designation []Designation `json:"designation"`
}

type StringNumber string

func (SN *StringNumber) UnmarshalJSON(str []byte) error {
	var value interface{}
	json.Unmarshal(str, &value)
	switch t := value.(type) {
	case int:
		*SN = StringNumber(strconv.Itoa(value.(int)))
	case string:
		*SN = StringNumber(value.(string))
	default:
		fmt.Println("error: unsupported type: ", t)
	}

	return nil
}

type CodeSystemBase struct {
	System        string       `json:"system"`
	Version       StringNumber `json:"version"`
	CaseSensitive bool         `json:"caseSensitive"`
	Concept       []Concept    `json:"concept"`
}

type CodeSystem struct {
	CodeSystemBase
	ConceptTemplates Concept             `json:"conceptTemplates,omitempty"`
	ConceptData      []map[string]string `json:"conceptData,omitempty"`
}

// func (CS *CodeSystem) MarshalJSON() ([]byte, error) {
// 	fmt.Println("Marshaling CodeSystem")
// 	concepts := make([]Concept, len(CS.ConceptData))
// 	for index, concept := range concepts {
// 		data := CS.ConceptData[index]
// 		concept.Code = formatter.New(CS.ConceptTemplates.Code, data).Parse()
// 		concept.Definition = formatter.New(CS.ConceptTemplates.Definition, data).Parse()
// 		concept.Display = formatter.New(CS.ConceptTemplates.Display, data).Parse()
// 		concept.Designation = CS.ConceptTemplates.Designation
// 	}

// 	return json.Marshal(&CodeSystemBase{
// 		System:        CS.System,
// 		Version:       CS.Version,
// 		CaseSensitive: CS.CaseSensitive,
// 		Concept:       concepts,
// 	})
// }

type Import struct {
	ResourceType string       `json:"resourceType"`
	URL          string       `json:"url"`
	Version      StringNumber `json:"version"`
	Name         string       `json:"name"`
	Status       string       `json:"status"`
	Publisher    string       `json:"publisher"`
	Date         string       `json:"date"`
	Description  string       `json:"description"`
	Requirements string       `json:"requirements"`
	Copyright    string       `json:"copyright"`
	CodeSystem   CodeSystem   `json:"codeSystem"`
	Contact      []Contact    `json:"contact"`
	Meta         Meta         `json:"meta"`
}

type Response struct {
	Success bool
}

func readFile(File string, file io.Reader) ([]map[string]string, error) {
	fmt.Println("Reading file...", File)
	if file == nil {
		file, err := os.Open(File)
		if err != nil {
			return nil, err
		}
		defer file.Close()
	}
	fmt.Println("File opened...")
	fileMapped := make([]map[string]string, 0)
	headers := make([]string, 0)
	scanner := bufio.NewScanner(file)
	count := 0
	for scanner.Scan() {
		line := scanner.Text()
		cells := strings.Split(line, "\t")
		count++
		if count == 1 {
			headers = cells
			continue
		}
		fileMapped = append(fileMapped, getSet(cells, headers))

		fmt.Println(scanner.Text())

	}

	if err := scanner.Err(); err != nil {
		return nil, err
	}

	return fileMapped, nil
}

func getSet(cells, headers []string) map[string]string {
	size := len(headers)
	set := make(map[string]string, size)
	for i := 0; i < size; i++ {
		set[headers[i]] = cells[i]
	}
	return set
}

func handler(w http.ResponseWriter, r *http.Request) {
	// fmt.Fprintf(w, "Hi there, I love %s!", r.URL.Path[1:])
	templ := template.Must(template.ParseFiles("./webroot/ui/index.html"))
	templ.Execute(w, nil)
}

func importHandler(w http.ResponseWriter, r *http.Request) {
	fmt.Println("import handler")

	if r.Method != http.MethodPost {
		templ := template.Must(template.ParseFiles("./templates/post-only.tpl.html"))
		fmt.Println("Not post")
		templ.Execute(w, nil)
		return
	}

	importData := Import{}
	message := struct {
		Success bool
		Message error
	}{true, errors.New("Successfull Import")}
	err := json.NewDecoder(r.Body).Decode(&importData)
	if err != nil {
		message.Success = false
		message.Message = err
		jsonResponse(w, http.StatusBadRequest, message)
		return
	}
	CS := &importData.CodeSystem
	CS.Concept = make([]Concept, len(CS.ConceptData))
	for index := range CS.Concept {
		data := CS.ConceptData[index]
		CS.Concept[index].Code = formatter.New(CS.ConceptTemplates.Code, data).Parse()
		CS.Concept[index].Definition = formatter.New(CS.ConceptTemplates.Definition, data).Parse()
		CS.Concept[index].Display = formatter.New(CS.ConceptTemplates.Display, data).Parse()
		CS.Concept[index].Designation = CS.ConceptTemplates.Designation
		CS.Concept[index].Abstract = CS.ConceptTemplates.Abstract
	}
	CS.ConceptData = nil
	resp, err := post(importData)
	if err != nil {
		message.Success = false
		message.Message = err
		jsonResponse(w, resp.StatusCode, message)
	}
	fmt.Println("got resp")
	defer resp.Body.Close()

	fmt.Println("response Status:", resp.Status)
	fmt.Println("response Headers:", resp.Header)
	body, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		message.Success = false
		message.Message = err
		jsonResponse(w, http.StatusBadRequest, message)
	}
	fmt.Println("response Body:", string(body))

	jsonResponse(w, http.StatusCreated, body)
}

func importFileHandler(w http.ResponseWriter, r *http.Request) {
	fmt.Println("importFile")
	// var err error
	// tmpl := template.Must(template.ParseFiles("./templates/importer-form.tpl.html"))
	if r.Method != http.MethodPost {
		fmt.Println("Not Post")
		// tmpl.Execute(w, nil)
		return
	}
	fmt.Println("trying to get the file..")
	file, header, err := r.FormFile("file")
	fmt.Println(file)
	defer file.Close()
	message := struct {
		Success bool
		Message error
	}{true, errors.New("Successfull Import")}
	if err != nil {
		message.Success = false
		message.Message = err
		jsonResponse(w, http.StatusBadRequest, message)
		// tmpl.Execute(w, message)
		return
	}

	fmt.Println("trying to read file")
	data, err := readFile("", file)
	if err != nil {
		message.Success = false
		message.Message = err
		// tmpl.Execute(w, message)
		jsonResponse(w, http.StatusBadRequest, message)
		return
	}

	name := strings.Split(header.Filename, ".")
	fmt.Println("Name: ", name)
	fmt.Println("data", data)
	jsonResponse(w, http.StatusCreated, data)
}
func post(data interface{}) (*http.Response, error) {
	url := "http://server:8080/team-10-fhir-server/baseDstu2/ValueSet"
	fmt.Println("URL:>", url)

	jsonStr, err := json.Marshal(data)
	if err != nil {
		return nil, err
	}
	fmt.Println("Marshelled: ", string(jsonStr))
	req, err := http.NewRequest("POST", url, bytes.NewBuffer(jsonStr))
	if err != nil {
		return nil, err
	}
	fmt.Println("created request")
	req.Header.Set("Content-Type", "application/json")

	client := &http.Client{}
	return client.Do(req)
}

func jsonResponse(w http.ResponseWriter, code int, data interface{}) {
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(code)
	if err := json.NewEncoder(w).Encode(data); err != nil {
		fmt.Println(err)
	}
	// fmt.Fprint(w, message)
}

func main() {
	http.HandleFunc("/", handler)
	http.HandleFunc("/importer", importHandler)
	http.HandleFunc("/importer/files", importFileHandler)

	log.Fatal(http.ListenAndServe(":7070", nil))
}
