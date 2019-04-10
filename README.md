# SCORE Project 10-Year Risk of Cardiovascular Disease
Repository containing the work for creating a JavaScript version of the SCORE Project's model for estimation of ten-year risk of fatal cardiovascular disease.

---
**NOTE**

See http://demo.kgrid.org/score (or README.md in the `docs` directory) for more information on what the SCORE model does and how to use it.

----

## How to get the SCORE Knowledge Object running in your local environment

### Starting from source code

Check out the score object GitHub repo:

```bash
git clone https://github.com/kgrid-demos/score.git
cd score
```

Then download the latest release of the KGrid Activator from the [release page](https://github.com/kgrid/kgrid-activator/releases) (https://github.com/kgrid/kgrid-activator/releases)

directly into the `score` directory you just checked out and start up the Activator pointing to the current directory. For example, on a Mac (you'll need the [Java SDK version 8 or higher](https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html) running on your machine):

```
java -jar kgrid-activator-1.0.6.jar --kgrid.shelf.cdostore.url=filesystem:file:${PWD}
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
kgrid-demos/score
│   README.md
│   score.js
|   package.json
│
└───tests
│   │   input.csv
│   │   score.test.js
│   
└───resources
```

## Packages
* [csvtojson](https://www.npmjs.com/package/csvtojson#parameters)

## Output

CHD Risk = 
Non-CHD CVD Risk = 
Total = 


### To package the object

zip -r 99999-score.zip 99999-score -x '*node_modules*' '*resources*'

### Future Development

KnowledgeObject to render an image in the browser representing risk score position on chart
ex. in existing icon array object
