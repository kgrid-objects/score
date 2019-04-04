var rewire = require('rewire');
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
        for(var count = 1; count < jsonArray.length; count++) {
            var row = jsonArray[count];
           
            var inputObj = {
                age: parseFloat(row.age),
                sex: row.sex,
                sbp: parseFloat(row.sbp),
                chol: parseFloat(row.chol),
                smoke: parseInt(row.smoke),
                risk: row.risk
                
            }
            
            var outputObj = {
                CHDRisk: row.CHDRisk,
                NonCHDRisk: row.NonCHDRisk,
                TotalRisk: row.TotalRisk,
            }
            
            console.log("Java Output: ", score10yrRisk(inputObj));
            console.log("Expected: ", outputObj);
        }
        
  });

// this is how the csv file prints

/*
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
*/

