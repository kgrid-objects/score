var rewire = require('rewire');

var inputs = {"age":"40","sex":"F","smoke":"1","sbp":"180","chol":"8","risk":"low"};
var scoreJS = rewire("../score10yrRisk");
var score10yrRisk = scoreJS.__get__("score10yrRisk");
var output = 0;

test('Did it run', () => {
  expect(score10yrRisk(inputs)).toEqual(expect.anything());
});

test('runs model', () => {

  expect(score10yrRisk(inputs)).toEqual(output);
});
