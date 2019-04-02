var rewire = require('rewire');
var csv = require('csvtojson');

var scoreJS = rewire("../score");
var score10yrRisk = scoreJS.__get__("score10yrRisk");

/*
 Begin Tests
*/ 

const jsonArray=await csv().fromFile(csvFilePath);
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



/*
 End Tests
*/ 