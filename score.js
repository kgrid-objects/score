function score10yrRisk(inputs) {

    var age = inputs.age;
    var sex = inputs.sex;
    var sbp = inputs.sbp;
    var chol = inputs.chol;
    var smoke = inputs.smoke;
    var risk = inputs.risk;



    // attach error message if input arguments are out of range
//    scoreObj.CHDRisk = "ERROR: Input out of range";
//    scoreObj.NonCHDRisk = "ERROR: Input out of range";
//    scoreObj.TotalRisk = "ERROR: Input out of range";
//

    var scoreObj = calculateRisk(age, sex, smoke, sbp, chol, risk);

    return scoreObj;
}

function calculateRisk (age, sex, smoke, sbp, chol, risk) {
        // Output Array
        var scoreObj = {
            CHDRisk: -5,
            NonCHDRisk: -5,
            TotalRisk: -5,

        };

        //assign alpha and p coefficients
        var coefficientsCHD = {
             "low-M-alpha": -22.1,
             "low-M-p": 4.71,
             "low-F-alpha": -29.8,
             "low-F-p": 6.36,
             "high-M-alpha": -21.0,
             "high-M-p": 4.62,
             "high-F-alpha": -28.7,
             "high-F-p": 6.23
        }

        var coefficientsNon = {
             "low-M-alpha": -26.7,
             "low-M-p": 5.64,
             "low-F-alpha": -31,
             "low-F-p": 6.62,
             "high-M-alpha": -25.7,
             "high-M-p": 5.47,
             "high-F-alpha": -30,
             "high-F-p": 6.42
        }


        //calculate CHD Risk
        var alphaCHD = coefficientsCHD[risk + "-" + sex + "-alpha"];
        var pCHD = coefficientsCHD[risk + "-" + sex + "-p"];
        var w = ((0.24) * (chol - 6)) + ((0.018) * (sbp - 120)) + (0.71 * smoke);


           var s_sub_0_age = Math.exp(-1 * Math.exp(alphaCHD) * Math.pow((age - 20),pCHD));
           var s_sub_0_age10 = Math.exp(-1 * Math.exp(alphaCHD) * Math.pow((age - 10),pCHD));
          
            var s_age = Math.pow(s_sub_0_age, Math.exp(w));
            var s_age10 = Math.pow(s_sub_0_age10, Math.exp(w));

            // set output CHDRisk
            scoreObj.CHDRisk = 1-(s_age10/s_age);


        //calculate non-CHD CVD Risk
        var alphaNon = coefficientsNon[risk + "-" + sex + "-alpha"];
        var pNon = coefficientsNon[risk + "-" + sex + "-p"];
        var wNon = ((0.02) * (chol - 6)) + ((0.022) * (sbp - 120)) + (0.63 * smoke);

        var s_sub_0_ageNon = Math.exp(-1 * Math.exp(alphaNon) * Math.pow((age - 20),pNon));
        var s_sub_0_age10Non = Math.exp(-1 * Math.exp(alphaNon) * Math.pow((age - 10),pNon));

            var s_ageNon = Math.pow(s_sub_0_ageNon, Math.exp(wNon));
            var s_age10Non = Math.pow(s_sub_0_age10Non, Math.exp(wNon));

            // set output NonCHDRisk and TotalRisk
            scoreObj.NonCHDRisk = 1-(s_age10Non/s_ageNon);
            scoreObj.TotalRisk = scoreObj.CHDRisk + scoreObj.NonCHDRisk;
            
            // truncate each output to 9 decimal places
            scoreObj.CHDRisk = parseFloat(scoreObj.CHDRisk.toFixed(9));
            scoreObj.NonCHDRisk = parseFloat(scoreObj.NonCHDRisk.toFixed(9));
            scoreObj.TotalRisk = parseFloat(scoreObj.TotalRisk.toFixed(9));

        return scoreObj;
}
