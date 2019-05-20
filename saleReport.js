var companyName = "HeavenlyGatePicture";
var employees = ["King K","Oscar D","Junior D","Patrick K","James T","Kirk T"];
var employeeId = ["1234","3456","2343","9089","6745","1200"];
var salaries = [[345000,212000],[65000,67000,70000],[45000,51000],[78000,87000],[],[75000,89000]];
var departments = ["Excuctives","Engineers","Production","Research","Marketing","Finance"];
var departmentsId = ["d0012", "d0013","d0014","d0015", "d0023", "d0025"];


var grandTotal = 0;
for(var i = 0; i < departmentsId.length; i++) {
  var subtotal = 0;
  console.log('');
  console.log(`departments ${departmentsId[i]} - ${departments[i][j]}:`)


for(var j = 0; j < employees[i].length; j++) {
        
        var totals = salaries[i][j];
        console.log(` ${j+1} Employee ID: ${employeeId[i][j]}, Name: ${employees[i][j]},
            Salary: ${salaries[i][j]}`);
            
             subtotal += totals;
        grandTotal += totals;
}

 console.log("-----------------");
    console.log('The Subtotal annual Salary for', departments[i], 'is', subtotal);
}
console.log('');
console.log('The Grand Total for all of the departments is', grandTotal);

