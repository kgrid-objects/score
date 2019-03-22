function score10yrRisk (inputs) {

    // KO Output
    var scoreArray = {
        CHDRisk: -5,
        NonCHDRisk: -5,
        TotalRisk: -5,
        
    }
    
    // attach error message if input arguments are out of range
    
    // coefficient table
    var betaCoefficients = [
    {"age_min":0,"age_max":1,"white-male":0,"white-female":0,"black-male":0.1,"black-female":0.1},
    {"age_min":1,"age_max":4,"white-male":0,"white-female":0,"black-male":0,"black-female":0},
    {"age_min":5,"age_max":9,"white-male":0,"white-female":0,"black-male":0,"black-female":0},
    {"age_min":10,"age_max":14,"white-male":0,"white-female":0,"black-male":0,"black-female":0}
    ]
    
    function calculateRisk (argument1, arg2, arg3) {
         
        return scoreArray; 
    }
   
    
    return scoreArray
}    