<!--https://demo.kgrid.org/score/
Intended Use: Constraints (input/ouput format), what is the model, how can I see it in use
KGrid Personas: Integrator, Provider, Researcher-as-user 
-->

# Systematic COronary Risk Evaluation (SCORE) Project 10-Year Risk of Cardiovascular Disease
Documentation about a prototype JavaScript version of the SCORE Project's high and low European population risk model for estimation of 10-year risk of fatal cardiovascular disease.

This readme file is focused on the current (v1) implementation of the SCORE Knowledge Object (KO)

## Inputs to the risk scoring function comprising the payload of the KO are:
       
        Age (variable = age) recommended for patients 40-65 years of age
        Sex (variable = sex) in two levels, M=male and F=female
        Systolic Blood Pressure (variable = sbp) between 120-180 mmHg
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

Follow [THIS LINK TO THE SCORE KO](https://editor.swagger.io/?url=https://activator.kgrid.org/99999/score/v1/service-specification.yaml) to try it out in the Swagger Editor. In this case, the Swagger Editor reads the service description from the SCORE KO, enabling you to enter input parameters and compute results without having to install any software. 

More information about the [Swagger Editor](https://swagger.io/tools/swagger-editor/) is available online.

### Exploring the SCORE KO after doing a local installation of Knowledge Grid source code

Begin by cloning the SCORE KO GitHub repo:

```bash
git clone https://github.com/kgrid-demos/score.git
cd score
```

Next, download the latest release of the KGrid Activator from the [release page](https://github.com/kgrid/kgrid-activator/releases) (https://github.com/kgrid/kgrid-activator/releases)

Then, move the KGrid Activator into the `score` directory you just cloned and checked out and start up the Activator while pointing it to the current directory. For example, on a Mac (you'll need the [Java SDK version 8 or higher](https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html) running on your machine):

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

Follow [this]( https://www.apirequest.io/5cb6433ae9f62e2d43ec1485?at=eyJhcHAiOiI1Y2I2NDMzYWU5ZjYyZTJkNDNlYzE0ODUiLCJhdWQiOiI2dVowbk9qZnJyOE5JajRyOEk2Tk51clN2RjdWWTJtTCIsInZlciI6IjEiLCJvcmciOiIwOjAiLCJwZXJtaXNzaW9ucyI6eyIwOjAiOnsic2NwIjoiY3JlYXRlOndvcmtzcGFjZXMgcmVhZDp3b3Jrc3BhY2VzIHVwZGF0ZTp3b3Jrc3BhY2VzIGRlbGV0ZTp3b3Jrc3BhY2VzIn19LCJleHAiOjE1NTc5NjQ4MDAsImp0aSI6Ijg5NGQwNmIxLTUzODItNDI3MC04MjA1LTk5NTEwZWYzZjJiZCJ9.wGBP6WptzEeUI9VZ2kyIttNzr6Rn_aLNGPrbnTKjLIo) link to a free browser-based HTTP client to send HTTP requests already loaded with the URL for the Knowledge Grid Activator and necessary headings/body format for a POST command call. Adjust the input values and call the knowledge object... example response pictured below.

&nbsp;
&nbsp;


![KO POST](resources/response.png?raw=true "Title")



