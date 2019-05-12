package formatter

import (
	"regexp"
)

type formatter struct {
	Str  string
	Data map[string]string
}

func New(str string, data map[string]string) formatter {
	return formatter{str, data}
}

// func main() {
// 	r := strings.NewReplacer("<", "&lt;", ">", "&gt;")
// 	fmt.Println(r.Replace("This is <b>HTML</b>!"))
// 	m := []map[string]string{
// 		map[string]string{
// 			"name a": "jim",
// 			"fnam a": "snames",
// 		},
// 		map[string]string{
// 			"name a": "james",
// 			"fnam a": "smith",
// 		},
// 	}
// 	formattedStrings := make([]string, len(m))
// 	F := Format{Str: "[name a]-[fnam a]"}

// 	for index, value := range m {
// 		F.Data = value
// 		formattedStrings[index] = string(F.Parse())
// 	}
// }

//parse the square bracket variables from the string;
func (F formatter) Parse() string {
	search := regexp.MustCompile("\\[(.*?)\\]")
	return search.ReplaceAllStringFunc(F.Str, F.replaceFunc)
}

func (F formatter) replaceFunc(str string) string {
	key := str[1 : len(str)-1]
	// fmt.Println("replaceFunc: key", key)
	if v, ok := F.Data[key]; ok {
		// fmt.Println("replaceFunc: value: ", v)
		return v
	}
	return str
}
