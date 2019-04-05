var rewire = require('rewire');
var csv = require('csvtojson');

var scoreJS = rewire("../score");
var score10yrRisk = scoreJS.__get__("score10yrRisk");

/*
 Begin Tests
*/

var inputsBasic1 = {
    age: 65,
    sex: "F",
    smoke: 1,
    sbp: 120,
    chol: 6,
    risk: "low"
}
// Test that KO is giving (any) output
test('KO gives output', () => {
  expect(score10yrRisk(inputsBasic1)).toEqual(expect.anything());
});


// testing out of bounds errors
var inputsBasic2 = {
    age: 66,
    sex: "F",
    smoke: 1,
    sbp: 120,
    chol: 6,
    risk: "low"
}
var expected2 = {
  {"CHDRisk": 0.019440735,
  "NonCHDRisk": 0.015653388,
  "TotalRisk": 0.035094123,
  "error": "ERROR: Input out of range. Age must be within 40 to 65 inclusive. Age set to 65 by default."}
}
// Test that KO is giving (any) output
test('KO finds out of bounds variable', () => {
  expect(score10yrRisk(inputsBasic2)).toEqual(expected2);
});

/*


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
                CHDRisk: parseFloat(row.CHDRisk),
                NonCHDRisk: parseFloat(row.NonCHDRisk),
                TotalRisk: parseFloat(row.TotalRisk),
                error: "",
            }

            expect(score10yrRisk(inputObj)).toEqual(outputObj);
        }

  });
*/


// check extreme input values
// ex. age boundary
//     **Warning** This patient's age places them outside of the recommended blah blah **


/*
 End Tests
*/
