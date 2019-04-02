var rewire = require('rewire');

var scoreJS = rewire("../score10yrRisk");
var score10yrRisk = scoreJS.__get__("score10yrRisk");

/*
 Begin Tests
*/ 

// Test that KO is giving (any) output
test('KO gives output', () => {
  expect(score10yrRisk(inputs)).toEqual(expect.anything());
});

// Patient with Risk Scores of Zero
var inputsBasic = {"age":"61","sex":"f","smoke":"1","sbp":"180","chol":"8","risk":"low"};
var outputsBasic = { CHDRisk: 0, NonCHDRisk: 0, TotalRisk: 0 }
test('KO scores patient with zero risk', () => {
  expect(score10yrRisk(inputsBasic)).toEqual(outputsBasic);
});


// Run 80 test patients representing extremes of risk evaluation chart
// Input: '80patients.csv'
// Check Against Output: '80patientsScored.csv'
test('KO scores 80 test patients', () => {
    var  input = ;
    var output = ;
    for (count = 0; count < 81; count++) {
        expect(score10yrRisk(input)).toEqual(output);
    };

/*
 End Tests
*/ 