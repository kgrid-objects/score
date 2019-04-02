var csv = require('csvtojson');


// Run 80 test patients representing extremes of risk evaluation chart
// Input: '80patients.csv'
// Check Against Output: '80patientsScored.csv'
const csvTestInputFilePath='./tests/input.csv'
//const jsonArray=await csv().fromFile(csvTestInputFilePath);


test('KO scores 80 test patients', () => {
    
        // expect(jsonArray).toEqual("");
//        csv().fromFile(csvTestInputFilePath).then((jsonObj)=>{
//            expect(jsonObj).toEqual("");
//            /** 
//             * [
//             * 	{a:"1", b:"2", c:"3"},
//             * 	{a:"4", b:"5". c:"6"}
//             * ]
//             */ 
//        })
    
    return csv().fromFile(csvTestInputFilePath).then((jsonObj)=>{
        expect(jsonObj).toBe("");
    });
});
