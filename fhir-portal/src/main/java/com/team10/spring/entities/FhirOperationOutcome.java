package com.team10.spring.entities;

import java.util.List;

public class FhirOperationOutcome {
    private List<Issue> issue;
    private FhirText text;

    public static class FhirText {
        private String status, div;

        /**
         * @return the status
         */
        public String getStatus() {
            return status;
        }

        /**
         * @param status the status to set
         */
        public void setStatus(String status) {
            this.status = status;
        }

        /**
         * @return the div
         */
        public String getDiv() {
            return div;
        }

        /**
         * @param div the div to set
         */
        public void setDiv(String div) {
            this.div = div;
        }
    }

    public static class CodeableConcept {
        private List<Coding> coding;
        private String text;

        /**
         * @return the coding
         */
        public List<Coding> getCoding() {
            return coding;
        }

        /**
         * @param coding the coding to set
         */
        public void setCoding(List<Coding> coding) {
            this.coding = coding;
        }

        /**
         * @return the text
         */
        public String getText() {
            return text;
        }

        /**
         * @param text the text to set
         */
        public void setText(String text) {
            this.text = text;
        }
    }

    public static class Coding {
        private String system,
               version,
               code,
               display;
        private Boolean userSelected;

        /**
         * @return the system
         */
        public String getSystem() {
            return system;
        }

        /**
         * @param system the system to set
         */
        public void setSystem(String system) {
            this.system = system;
        }

        /**
         * @return the version
         */
        public String getVersion() {
            return version;
        }

        /**
         * @param version the version to set
         */
        public void setVersion(String version) {
            this.version = version;
        }

        /**
         * @return the code
         */
        public String getCode() {
            return code;
        }

        /**
         * @param code the code to set
         */
        public void setCode(String code) {
            this.code = code;
        }

        /**
         * @return the display
         */
        public String getDisplay() {
            return display;
        }

        /**
         * @param display the display to set
         */
        public void setDisplay(String display) {
            this.display = display;
        }

        /**
         * @return the userSelected
         */
        public Boolean getUserSelected() {
            return userSelected;
        }

        /**
         * @param userSelected the userSelected to set
         */
        public void setUserSelected(Boolean userSelected) {
            this.userSelected = userSelected;
        }
    }

    public static class Issue {
        private String severity,
                       code,
                       diagnostics,
                       location;

        private CodeableConcept details;

        /**
         * @return the severity
         */
        public String getSeverity() {
            return severity;
        }

        /**
         * @param severity the severity to set
         */
        public void setSeverity(String severity) {
            this.severity = severity;
        }

        /**
         * @return the code
         */
        public String getCode() {
            return code;
        }

        /**
         * @param code the code to set
         */
        public void setCode(String code) {
            this.code = code;
        }

        /**
         * @return the diagnostics
         */
        public String getDiagnostics() {
            return diagnostics;
        }

        /**
         * @param diagnostics the diagnostics to set
         */
        public void setDiagnostics(String diagnostics) {
            this.diagnostics = diagnostics;
        }

        /**
         * @return the location
         */
        public String getLocation() {
            return location;
        }

        /**
         * @param location the location to set
         */
        public void setLocation(String location) {
            this.location = location;
        }

        /**
         * @return the details
         */
        public Object getDetails() {
            return details;
        }

        /**
         * @param details the details to set
         */
        public void setDetails(CodeableConcept details) {
            this.details = details;
        }

    }

    /**
     * @return the issue
     */
    public List<Issue> getIssue() {
        if (issue == null) {
			issue = new java.util.ArrayList<Issue>();
		}
		return issue;
    }

    /**
     * @param issue the issue to set
     */
    public void setIssue(List<Issue> issue) {
        this.issue = issue;
    }

    /**
     * @return the text
     */
    public FhirText getText() {
        return text;
    }

    /**
     * @param text the text to set
     */
    public void setText(FhirText text) {
        this.text = text;
    }
}