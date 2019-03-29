const score10yrRisk = require('./score10yrRisk');

var inputs = {"age":"55","sex":"M","smoke":"1","sbp":"140","chol":"6.6","risk":"low"};
    
test('runs model', () => {
  expect(score10yrRisk(inputs)).toBe(5.5);
}); 