<!--https://demo.kgrid.org/score/
Intended Use: Constraints (input/ouput format), what is the model, how can I see it in use
KGrid Personas: Integrator, Provider, Researcher-as-user 
-->

# Systematic COronary Risk Evaluation (SCORE) Project 10-Year Risk of Cardiovascular Disease
Documentation about a prototype JavaScript version of the SCORE Project's high and low European population risk model for estimation of 10-year risk of fatal cardiovascular disease.

This readme file is focused on the current (v1) implementation of the SCORE Knowledge Object (KO)

## Inputs to the risk scoring function comprising the payload of the KO are:
       
        Age (variable = age) between 40-65 years
        Systolic Blood Pressure (variable = sbp) at four levels only: 120,140,160,180+ mmHg
        Total Cholesterol (variable = chol) between 4-8+ mmol/L
        Smoking (variable = smoke) in two levels, 1=Yes or 0=No
        Coronary Heart Disease Population Risk (risk) at two levels only: high, low 
        
The SCORE function in the KO uses coefficients for systolic blood pressure, smoking, and cholesterol for both coronary and non-coronary cardiovascular disease risk.
                
In addition, the SCORE function in the KO uses other coefficients for coronary and non-coronary cardiovascular disease risk two different European populations. A higher-risk Northern European population's coefficients are available along with those of a lower-risk Southern European population. 

All of these coefficients have been taken from:
Conroy RM, Pyörälä K, Fitzgerald AE, Sans S, Menotti A, De Backer G, De Bacquer D, Ducimetiere P, Jousilahti P, Keil U, Njølstad I. Estimation of ten-year risk of fatal cardiovascular disease in Europe: the SCORE project. European heart journal. 2003 Jun 1;24(11):987-1003.

https://academic.oup.com/eurheartj/article/24/11/987/427645

#### Example input to the SCORE function in the KO

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
        
### Validation of input data elements
Values for systolic blood pressure (sbp) and total cholesterol (chol) are validated against the following ranges:

An sbp value between 120 and 180 mmHg is expected. Lower or higher values are mapped to 120 or 180, respectively. 

A chol value between 4 and 8 mmol/L is expected.  Lower or higher values are mapped to 4 or 8, respectively. 

An age value between 30 and 90 years is expected. For age values greater than 65 or less than 45, results are given, however the model is predicated on data from 45 to 64 years old and therefore results for individuals 30 to 45 and 65 to 90 are likely to be less accurate.  

# Try Out the SCORE Knowledge Object

### Explore the SCORE KO using Swagger

Follow [this link](https://editor.swagger.io/?url=https://activator.kgrid.org/99999/score/v1/service-specification.yaml) to try out the SCORE KO in the Swagger Editor follow the link below. 

Follow the editor instructions to try out the SCORE interface. The Swagger Editor prepopulates the request with the example from the service description. You can change the input parameters to see how CHD risk is affected in the payload returned by the Knowledge Object.


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

### Trying out the Knowledge Object in a 

The [Swagger Editor](https://swagger.io/tools/swagger-editor/) link above allows you to interact directly with the KO by generating the body API function calls, and view the resulting payload.

