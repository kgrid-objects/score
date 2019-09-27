<!-- https://github.com/kgrid-objects/score
Intended Use: exploring/updating code that implements this model
KGrid Personas: Developer 
-->

[![GitHub release](https://img.shields.io/github/release/kgrid-objects/score.svg)](https://github.com/kgrid-objects/score/releases/)
[![CircleCI](https://circleci.com/gh/kgrid-objects/score.svg?style=svg)](https://circleci.com/gh/kgrid-objects/score)
[![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)](http://perso.crans.org/besson/LICENSE.html)


# SCORE Project 10-Year Risk of Cardiovascular Disease
Repository containing the work for creating a JavaScript version of the SCORE Project's model for estimation of ten-year risk of fatal cardiovascular disease.

---
**NOTE**

See https://kgrid-objects.github.io/score/ (or README.md in the `docs` directory) for more information on what the SCORE model does and how to use it.

----

## How to get the SCORE Knowledge Object running in your local environment

### Prerequisites
There are testing and packaging features in this project that require npm, npm is installed with Node.js npm. 
  Once npm is installed
  
  ```
  cd ./99999-score/v1
  npm install
  ```

#

### Starting from source code

Check out the score object GitHub repo:

```bash
git clone https://github.com/kgrid-objects/score.git
cd score
```

Then download the latest release of the KGrid Activator from the [release page](https://github.com/kgrid/kgrid-activator/releases) (https://github.com/kgrid/kgrid-activator/releases)

directly into the `score` directory you just checked out and start up the Activator pointing to the current directory. For example, on a Mac (you'll need the [Java SDK version 8 or higher](https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html) running on your machine):

```
java -jar kgrid-activator-1.0.8.jar --kgrid.shelf.cdostore.url=filesystem:file:${PWD}
```
You can check that the Activator is running by going to http://localhost:8080/99999/score/v1 in a browser. You should see the metadata for the SCORE KO:

```json
{
  "@id": "v1",
  "@type": "koio:Implementation",
  "identifier": "ark:/99999/score/v1",
  "title": "SCORE Project",
  "hasServiceSpecification": "v1/service-specification.yaml",
  "hasDeploymentSpecification": "v1/deployment-specification.yaml",
  "hasPayload": "v1/src/score.js",
  "@context": [
    "http://kgrid.org/koio/contexts/implementation.jsonld"
  ]
}
```

### Explore the SCORE KO

To try out the SCORE KO in the Swagger Editor you need to point to the service description from the Swagger Editor at https://editor.swagger.io. The easiest way to is construct a [Swagger Editor url pointing to the OpenAPI YAML file](https://editor.swagger.io/?url=http://localhost:8080/99999/score/v1/service-specification.yaml) containing the service description:

```
https://editor.swagger.io/?url=http://localhost:8080/99999/score/v1/service-specification.yaml
```

Follow the editor instructions to try out the SCORE interface. THe Swagger Editor prepopulates the request with the example from teh service description. You can change the input parameters to see how CHD risk is affected.

### Starting from the packaged SCORE KO in a KGRID Library

Go to the sandbox library at monkey-library.kgrid.org and push to push to the sandbox activator at monkey-activator.kgrid.org and follow the link to the Swagger Editor (pointing back to the sandbox activator instance)


# How the code for the SCORE Knowledge Object is organized
        
## SCORE File Structure

```
├── 99999-score
│   ├── metadata.json
│   └── v1
│       ├── deployment-specification.yaml
│       ├── metadata.json
│       ├── package-lock.json
│       ├── package.json
│       ├── score.js
│       ├── service-specification.yaml
│       └── tests
│           ├── input.csv
│           └── score.test.js
├── README.md
└── docs
    ├── README.md
    └── resources
        ├── CHD_RISK_Score.Rmd
        ├── CVD.Scoring.Clinicians.1209.full.pdf
        ├── SCORE\ Workbook.v2.xlsx
        └── score_project_results.pdf

```

## Output

CHD Risk = 
Non-CHD CVD Risk = 
Total = 


### Score Testing

Unit Tests are located in the tests directory and can be executed using _npm_.  These tests utilize
[Jest](https://jestjs.io/) and  [rewire](https://github.com/jhnns/rewire). Jest provides the testing
framework and rewire allows the tests to access the javascript function without the
convince of the export modules.  The [tests](../99999-score/v1/tests) are in
the tests directory.  You can execute the tests via npm

```
npm test
```

### Package

You can create zip file of the Knowledge Object which can be used to deposit to a KGrid
Library or load/activate on a KGrid Activator.

```
npm run package
```

### Tools

*NPM Tool*

* [jest](https://jestjs.io/)
* [rewire](https://github.com/jhnns/rewire)
* [csvtojson](https://www.npmjs.com/package/csvtojson#parameters)

### CI Build and Release
**CI Build**

The IPP Collection utilized [Circle CI](https://circleci.com/gh/kgrid-objects/score)
- Score KO is tested 
- Score KO is packaged 


### Future Development

KnowledgeObject to render an image in the browser representing risk score position on chart
ex. in existing icon array object
