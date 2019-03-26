function score10yrRisk (inputs) {

    // Output Array
    var scoreArray = {
        CHDRisk: -5,
        NonCHDRisk: -5,
        TotalRisk: -5,
        
    }
    
    // attach error message if input arguments are out of range
    
    
    
    function calculateRisk (age, sex, smoke, sbp, chol, risk) {
        //assign alpha and p coefficients
        var coefficientsCHD = {
             "low-m-alpha":0,
             "low-m-p":1,
             "low-f-alpha":0,
             "low-f-p":0,
             "high-m-alpha":0,
             "high-m-p":1,
             "high-f-alpha":0,
             "high-f-p":0,
        }
        
        var coefficientsNon = {
             "low-m-alpha":0,
             "low-m-p":1,
             "low-f-alpha":0,
             "low-f-p":0,
             "high-m-alpha":0,
             "high-m-p":1,
             "high-f-alpha":0,
             "high-f-p":0,
        }
        var alphaCHD = coefficientsCHD[risk + "-" + sex + "-alpha"];
        var alphaNon = coefficientsNon[risk + "-" + sex + "-alpha"];
        var pCHD = coefficientsCHD[risk + "-" + sex + "-p"];
        var pNon = coefficientsNon[risk + "-" + sex + "-p"];
       
        //calculate CHD Risk
        math.exp();
        
        
        //calculate non-CHD CVD Risk
        
        
        
        return scoreArray; 
    }
   
    
    return scoreArray
}    