var csv = require('csvtojson');
var scoreJS = rewire("../score");
var score10yrRisk = scoreJS.__get__("score10yrRisk");


// Run 80 test patients representing extremes of risk evaluation chart
// Input: '80patients.csv'
// Check Against Output: '80patientsScored.csv'
const csvTestInputFilePath='./tests/input.csv'
//const jsonArray=await csv().fromFile(csvTestInputFilePath);


test('KO scores 80 test patients', async () => {

        
        const jsonArray= await csv().fromFile(csvTestInputFilePath);
        for(var count = 0; count < 81; count++) {
            var scoreArray = score10yrRisk(jsonArray[0-4])
            expect(scoreArray[count]).toBe(jsonArray[count][5-7])
        }
    
});


// this is how the csv file prints

``` 
Object {
    +     "CHDRisk": "0.00595473",
    +     "age": "65",
    +     "chol": "4",
    +     "nonCHDRisk": "0.008040825",
    +     "risk": "low",
    +     "sbp": "120",
    +     "sex": "F",
    +     "smoke": "N",
    +     "totalRisk": "0.013995555",
    +   },
    +   Object {
    +     "CHDRisk": "0.04489347",
    +     "age": "65",
    +     "chol": "8",
    +     "nonCHDRisk": "0.032208835",
    +     "risk": "low",
    +     "sbp": "180",
    +     "sex": "F",
    +     "smoke": "N",
    +     "totalRisk": "0.077102305",
    +   },
```

