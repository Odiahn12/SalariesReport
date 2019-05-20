var business = "HGP ENTERPRISES";
var departmentId = ["d001", "d002", "d003", "d004","d005","d006","d007","d008","d009"]; 
var departments = ["Marketing", "Finance", "'Human Resources", "Production", "Development", "Quality Management", "Sales", "Research", "Customer Service"];
var employeeId = [ [10017], [], [10005,10013,10036,10039], [10003,10004,10010,10018,10020,10024,10026,10029,10030,10032,10035],[10001,10006,10008,10012,10014,10018,10021,10022,10023,10025,10027,10028,10031,10037,10040],
[10009,10010,10029,10033], [10002,10016,10034], [10007,10015,10019], [10011,10038]];
var salaries = [ [85958], [59755,56753, 77935], [94692, 68901, 73000, 86000], [43699,74057,80324, 84672, 47017, 96646,66313,77777,88806,69539,66584],[88958,59755, 52668,54423, 60598,84672,84169,41348,50113,57157,46145,58502,56689, 60213,63341],
[94409,80324,77777,60433], [72527,77935,53164], [88070,40000,50032],[56753,67894]];
var employeeName = [ ["King Ibalaba"], [], ["Oscar", "Steven", "Mark", "Mary"], ["Jose", "Nia", "Lee","Tim","Diahn","Etta","mayah","Romeo","Michal","john","James"],["John T", "Moses","Joseph","Mary M","Saul","paul","Jude","Louis","Henry","Drogba","messi","Ronaldo","Ronaldihno", "Okocha","Kanu"],
["Junior D","Patrick", "Patricia","Felecia"],["Borris","Pauline","Rick"],["Rose","Rosa","Rosaline"],["David","Dave"]]

  
  // total salary for each departments
  
  var grandTotal = 0;
for (var i = 0; i < departmentId.length; i++) {
    var subTotal = 0;
    console.log('');
    console.log(`Department ${departmentId[i]} - ${departments[i][j]}:`);
    
    for(var j = 0; j < employeeName[i].length; j++) {
        
        var totals = salaries[i][j];
        console.log(` ${j+1} Employee ID: ${employeeId[i][j]}, Name: ${employeeName[i][j]},
            Salary: ${salaries[i][j]}`);
        
        subTotal += totals;
        grandTotal += totals;
    }
    
    console.log("-----------------");
    console.log('The Subtotal annual Salary for', departments[i], 'is', subTotal);
}

console.log('');
console.log('The Grand Total for all of the departments is', grandTotal);




