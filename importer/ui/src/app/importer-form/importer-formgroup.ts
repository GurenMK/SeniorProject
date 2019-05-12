
export interface FormGrouper {
    [key: string]: Fielder<any>;
}

export interface Fielder<T> {
    name: string;
    label?: string;
    value?: T;
    group?: FormGrouper;
    list?: FormGrouper[];
    // validators?: any[];
}
export const IMPORT_FIELDS: FormGrouper = {
    resourceType: {
        name: 'resourceType',
        value: 'ValueSet'
    },
    meta: {
        name: 'meta',
        group: {
            versionId: {
                name: 'versionId',
                value: 1
            },
            lastUpdated: {
                name: 'lastUpdated',
                value: '2016-04-24T21:29:44.091-04:00'
            }
        }
    },
    url: {
        name: 'url',
        value: 'http://team10fhirportal.com/fhir/ValueSet/AllOrganisms'
    },
    version: {
        name: 'version',
        value: '9.2'
    },
    name: {
        name: 'name'
    },
    status: {
        name: 'status',
        value: 'release'
    },
    publisher: {
        name: 'publisher'
    },
    contact: {
        name: 'contact',
        list: [
            {
                name: {
                    name: 'name',
                    value: 'Team 10'
                }
            }
        ]
    },
    date: {
        name: 'data',
        value: '2019-03-09'
    },
    description: {
        name: 'description',
        value: 'NHSN All Organisms'
    },
    requirements: {
        name: 'requirements',
        value: `This value is published as part of FHIR in order to make the codes available to
                FHIR terminology services and so implementers can easily leverage the codes.`
    },
    copyright: {
        name: 'copyright',
        value: ''
    },
    codeSystem: {
        name: 'codeSystem',
        group: {
            system: {
                name: 'system',
                value: 'http://team10fhirportal.com/fhir/ValueSet/AllOrganisms'
            },
            version: {
                name: 'version',
                value: '9.2'
            },
            caseSensitive: {
                name: 'caseSensitive',
                value: true
            },
            conceptTemplates: {
                name: 'conceptTemplates',
                group: {
                    code: {
                        name: 'code',
                        value: '[code]'
                    },
                    abstract: {
                        name: 'abstract',
                        value: false
                    },
                    display: {
                        name: 'display',
                        value: '[name] - [code]'
                    },
                    definition: {
                        name: 'definition',
                        value: '[name] - [code]'
                    },
                    designation: {
                        name: 'designation',
                        list: [
                            {
                                language: {
                                    name: 'language',
                                    value: 'english'
                                }
                            }
                        ]
                    }
                }
            },
            conceptData: {
                name: 'conceptData'
            },
            // concept: {
            //     name: 'concept',
            //     group: {
            //         code: {
            //             name: 'code',
            //             value: '{{code}}'
            //         },
            //         abstract: {
            //             name: 'abstract',
            //             value: false
            //         },
            //         display: {
            //             name: 'display',
            //             value: '{{name}} - {{code}}'
            //         },
            //         definition: {
            //             name: 'definition',
            //             value: '{{name}} - {{code}}'
            //         },
            //         designation: {
            //             name: 'designation',
            //             list: [
            //                 {
            //                     language: {
            //                         name: 'language',
            //                         value: 'english'
            //                     }
            //                 }
            //             ]
            //         }
            //     },
            //     list: [
            //         {
            //             code: {
            //                 name: 'code',
            //                 value: '[NHSN Organism Name]'
            //             },
            //             abstract: {
            //                 name: 'abstract',
            //                 value: false
            //             },
            //             display: {
            //                 name: 'display',
            //                 value: '[NHSN Organism Name] - [NHSN Organism Code]'
            //             },
            //             definition: {
            //                 name: 'definition',
            //                 value: '[NHSN Organism Name] - [NHSN Organism Code]'
            //             },
            //             designation: {
            //                 name: 'designation',
            //                 list: [
            //                     {
            //                         language: {
            //                             name: 'language',
            //                             value: 'english'
            //                         }
            //                     }
            //                 ]
            //             }
            //         }
            //     ]
            // }
        }
    }
};
