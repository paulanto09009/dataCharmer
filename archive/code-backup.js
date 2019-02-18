var fs = require('fs');

let empNumDepart = '';
let empNumSalary = '';
let employeeNumDepart = [
  [],
  []
];
let employeeNumSalary = [
  [],
  [],
  []
];

// Pulling employee ID and department
function employDepartReport() {
 fs.readFile('employFile2.txt', 'utf8', function(err, data) {
  if (err) throw err;

  empNumDepart = data.split('\n')
  for (let i = 0; i < empNumDepart.length; i++) {

    employeeNumDepart[0] = empNumDepart[i].substring(0, 6).replace(/[(,),']/g, '');
    employeeNumDepart[1] = empNumDepart[i].substring(12, 6).replace(/[(,),']/g, '');
    
    if(employeeNumDepart[1] === 'd005') {
      console.log(' ' + employeeNumDepart[0] + '  ' + employeeNumDepart[1])
    }
    
  }
}) 
}


// Pulling employee ID and Salary
function employSalaryReport() {
  fs.readFile('employFile3.txt', 'utf8', function(err, data) {
  if (err) throw err;

  empNumSalary = data.split('\n')
  for (let i = 0; i < empNumSalary.length; i++) {
    
   employeeNumSalary[0] = empNumSalary[i].substring(0, 6).replace(/[(,),']/g, '');
   employeeNumSalary[1] = empNumSalary[i].substring(7, 14).replace(/[(,),']/g, '');
   employeeNumSalary[2] = empNumSalary[i].substring(25, 37).replace(/[(,),']/g, '');
    
    if(employeeNumSalary[2] === '9999-01-01') {
      console.log(' ' + employeeNumSalary[0] + '  ' + employeeNumSalary[1] + '  ' + employeeNumSalary[2])
    }
  }
})
};

employDepartReport();
employSalaryReport();

function finalReport(){
  for(var i = 0; i < employeeNumDepart.length; i++) {
      console.log(employeeNumDepart[0], employeeNumDepart[1], employeeNumSalary[0], employeeNumSalary[1], employeeNumSalary[2]);
  }
}
