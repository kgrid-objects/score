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

Follow [THIS LINK TO THE SCORE KO](https://editor.swagger.io/?url=https://kgrid-activator.herokuapp.com/kos/99999/score/service) to try it out in the Swagger Editor. You can follow these steps:

1. Click on the KO POST/Score endpoint which appears as a green bar on the right side of the screen.
2. Click on the "Try it out" button that now appears on the right side of the screen
3. Scroll down to the blue "Execute" bar and click on it

You have just processed the patient data shown below and generated the following cardiac risk outputs:

```
INPUT:
{
  "age": 45,
  "sex": "F",
  "smoke": false,
  "risk": "low",
  "sbp": 120,
  "chol": 4
}

OUTPUT:
{
  "result": {
    "comment": {},
    "riskOutputs": {
      "CHDRisk": 0.000412461,
      "NonCHDRisk": 0.000491568,
      "TotalRisk": 0.000904029      <------- TOTAL CARDIAC RISK SCORE IS HERE (0.09%)
    }
  },
  "info": {
    "ko": {
      "@id": "v1",
      "@type": "koio:Implementation",
      "identifier": "ark:/99999/score/v1",
      "title": "SCORE Project",
      "hasServiceSpecification": "v1/service-specification.yaml",
      "hasDeploymentSpecification": "v1/deployment-specification.yaml",
      "hasPayload": "v1/score.js",
      "@context": [
        "http://kgrid.org/koio/contexts/implementation.jsonld"
      ]
    },
    "inputs": {
      "age": 45,
      "sex": "F",
      "smoke": false,
      "risk": "low",
      "sbp": 120,
      "chol": 4
    }
  }
}
```

In this case, the Swagger Editor reads the service description from the SCORE KO. The service description and the code running on an instance of the Knowledge Grid Activator are what enables you to enter input parameters and compute outputs without having to install any software locally.

More information about the [Swagger Editor](https://swagger.io/tools/swagger-editor/) is available online.

### Exploring the SCORE KO after doing a local installation of Knowledge Grid source code

Begin by cloning the SCORE KO GitHub repo:

```bash
git clone https://github.com/kgrid-objects/score.git
cd score
```

Next, download the latest release of the KGrid Activator from the [release page](https://github.com/kgrid/kgrid-activator/releases) (https://github.com/kgrid/kgrid-activator/releases)

Then, move the KGrid Activator into the `score` directory you just cloned and checked out and start up the Activator while pointing it to the current directory.

NOTE: To run the KGrid Activator you will need the [Java SDK version 8 or higher](https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html) running on your machine:

Here are the commands to run the KGrid Activator for Mac and for Windows that allow you to specify the exact path where the SCORE KO resides:

```
MAC
java -jar kgrid-activator-1.0.8.jar --kgrid.shelf.cdostore.url=filesystem:file:///{PATH HERE}/score

WINDOWS
java -jar kgrid-activator-1.0.8.jar --kgrid.shelf.cdostore.url=filesystem:file:///C:/Users/{PATH HERE}/score
```

On a Mac, a shortcut version of the same command can be run from within the score directory on your Mac:

```
MAC ONLY
java -jar kgrid-activator-1.0.8.jar --kgrid.shelf.cdostore.url=filesystem:file:${PWD}
```

NOTE: If the activator does not run using the command above, confirm the version you have downloaded matches the name of the version in the command, e.g., 1.0.8.

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

Follow [this](https://www.apirequest.io/5cba2a476c7cdd3c5844dd3b?at=eyJhcHAiOiI1Y2JhMmE0NzZjN2NkZDNjNTg0NGRkM2IiLCJhdWQiOiI2dVowbk9qZnJyOE5JajRyOEk2Tk51clN2RjdWWTJtTCIsInZlciI6IjEiLCJvcmciOiIwOjAiLCJwZXJtaXNzaW9ucyI6eyIwOjAiOnsic2NwIjoiY3JlYXRlOndvcmtzcGFjZXMgcmVhZDp3b3Jrc3BhY2VzIHVwZGF0ZTp3b3Jrc3BhY2VzIGRlbGV0ZTp3b3Jrc3BhY2VzIn19LCJleHAiOjE1NTgyMjQwMDAsImp0aSI6IjJmNTg1ZTMxLTYzYjEtNGY5MS05OWY4LWY2Y2NkOWE5MGNmZCJ9.jCDq5VKBnXvU1OWzhJvOH4PqXJnQK_Ux-sPP5V8OYPY) link to a free tool that is preconfigured to engage the Activator instance with the SCORE KO running on your local machine at localhost:8080.

Click on the green Send All button to perform a calculation on your machine using the SCORE KO.

&nbsp;
&nbsp;


![KO POST](resources/request.png?raw=true "Title")
