var rewire = require('rewire');
var csv = require('csvtojson');

var scoreJS = rewire("../src/score");
var score10yrRisk = scoreJS.__get__("score10yrRisk");
var calculateRisk = scoreJS.__get__("calculateRisk");

/*
 Begin Tests
*/

// Test 1
test('KO gives output', () => {
    var inputs = {
    age: 65,
    sex: "F",
    smoke: 1,
    sbp: 120,
    chol: 6,
    risk: "low"
}
    expect(score10yrRisk(inputs)).toEqual(expect.anything());
});


// Test 2
// 
test('Test 2', () => {
    var inputs = {
        age: 66,
        sex: "F",
        smoke: 1,
        sbp: 120,
        chol: 6,
        risk: "low"
    }
   
    var outputs = {
        "riskOutputs": {
        "CHDRisk": 0.021562707,
         "NonCHDRisk": 0.017451746,
         "TotalRisk": 0.039014453,
  }
}
    
    expect(score10yrRisk(inputs).riskOutputs).toEqual(outputs.riskOutputs);
});



// Test 3
/* Run 80 test patients representing extremes of risk evaluation chart
   Input: '80patients.csv'
   Check Against Output: '80patientsScored.csv'
*/

test('KO scores 80 test patients', async () => {

        const jsonArray= await csv().fromFile('./tests/input.csv');
        for(var count = 1; count < jsonArray.length; count++) {
            var row = jsonArray[count];

            var inputs = {
                age: parseFloat(row.age),
                sex: row.sex,
                sbp: parseFloat(row.sbp),
                chol: parseFloat(row.chol),
                smoke: parseInt(row.smoke),
                risk: row.risk
            }
            
            var outputs = {
                CHDRisk: parseFloat(row.CHDRisk),
                NonCHDRisk: parseFloat(row.NonCHDRisk),
                TotalRisk: parseFloat(row.TotalRisk),
            }

            expect(calculateRisk(inputs)).toEqual(outputs);
        }

  });


// Test 4
// check extreme input values
// ex. age boundary
//     **Warning** This patient's age places them outside of the recommended blah blah **


/*
 End Tests
*/
