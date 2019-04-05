# SCORE Project 10-Year Risk of Cardiovascular Disease
Repository containing the work for creating a JavaScript version of the SCORE Project's model for estimation of ten-year risk of fatal cardiovascular disease.


## Packages
* [csvtojson](https://www.npmjs.com/package/csvtojson#parameters)

## Input
       
        Age (40-65)
        SBP (sys/dias) 120,140,160,180
        CHOL (4-8)
        Smok (1/0)
        alpha
        p
        betaSBP
        betaSmok
        betaChol
        
### Input Validation
Values for systolic blood pressure (sbp) and total cholesterol (chol) were validated against ranges provided by [Loinc](https://loinc.org/).


        
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

## Output

CHD Risk = 
Non-CHD CVD Risk = 
Total = 



### Error Output

Ex. "Out of range value received for Age = 22" 


### Future Development

KnowledgeObject to render an image in the browser representing risk score position on chart
ex. in existing icon array object