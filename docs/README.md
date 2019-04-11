<!--https://demo.kgrid.org/score/
Intended Use: Constraints (input/ouput format), what is the model, how can I see it in use
KGrid Personas: Integrator, Provider, Researcher-as-user 
-->

# SCORE Project 10-Year Risk of Cardiovascular Disease
Repository containing the work for creating a JavaScript version of the SCORE Project's model for estimation of ten-year risk of fatal cardiovascular disease.

This readme file is focused on teh current (v1) implementation of the SCORE KO

## Inputs

The 10-year risk score is calculated based on these inputs:
       
        Age (40-65)
        SBP (sys/dias) 120,140,160,180
        CHOL (4-8)
        Smok (1/0)
        CHD Risk
        
The scoring equation uses coefficients based on age, gender and population characteristics (high risk, low risk)

        betaSBP
        betaSmok
        betaChol
                
A matrix of risk values are (alpha, p) are supplied...

#### Example input

```json
{
   "sex": "M", 
   "age": 50,
   "smoke": "0", 
   "risk": "low", 
   "sbp": 140, 
   "chol": 5 
}
```
        
### Input Validation
Values for systolic blood pressure (sbp) and total cholesterol (chol) were validated against ranges provided by [Loinc](https://loinc.org/).

Age must be between 30 and 90 years, and for values greater than 65 or less than 45 the results are limited.

# How to get the SCORE Knowledge Object running in your local environment

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

