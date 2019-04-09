# SCORE Project 10-Year Risk of Cardiovascular Disease
Repository containing the work for creating a JavaScript version of the SCORE Project's model for estimation of ten-year risk of fatal cardiovascular disease.

## Inputs

The 10-year risk score is calculated based on these inputs:
       
        Age (40-65)
        SBP (sys/dias) 120,140,160,180
        CHOL (4-8)
        Smok (1/0)
        CHD Risk
        
The score equation uses coefficients based on age gender and population characteristics (high risk, low risk)

        betaSBP
        betaSmok
        betaChol
                
A matrix of risk values are (alpha, p) are supplied...
        
### Input Validation
Values for systolic blood pressure (sbp) and total cholesterol (chol) were validated against ranges provided by [Loinc](https://loinc.org/).

Age must be between 30 and 90 years, and for values greater than 65 or less than 45 the results are limited.

# How to get the SCORE Knowledge object running in your local environment

a half dozen steps and a link to the kgrid getting started guide

```
java -jar kgrid-activator-1.0.5.jar --kgrid.shelf.cdostore.url=filesystem:file:${PWD}
```


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



### Error Output

Ex. "Out of range value received for Age = 22" 

### Future Development

KnowledgeObject to render an image in the browser representing risk score position on chart
ex. in existing icon array object
