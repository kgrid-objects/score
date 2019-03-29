const score10yrRisk = require('../score10yrRisk');

var inputs = {"age":"40","sex":"F","smoke":"1","sbp":"180","chol":"8","risk":"low"};

var output = {"CHDRisk": NaN, "NonCHDRisk": NaN, "TotalRisk": NaN}
test('runs model', () => {
  expect(score10yrRisk(inputs)).toEqual(output);
});
