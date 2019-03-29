var rewire = require('rewire');

var inputs = {"age":"40","sex":"f","smoke":"1","sbp":"180","chol":"8","risk":"low"};
var scoreJS = rewire("../score10yrRisk");
var score10yrRisk = scoreJS.__get__("score10yrRisk");

test('Gives output', () => {
  expect(score10yrRisk(inputs)).toEqual(expect.anything());
});

// Patient with Zero Risk Score
var output = { CHDRisk: 0, NonCHDRisk: 0, TotalRisk: 0 }
test('Patient with Zero Risk Score', () => {
  expect(score10yrRisk(inputs)).toEqual(output);
});
