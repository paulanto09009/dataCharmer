const company = 'Data Corp';
const departmentId = ['d001', 'd002', 'd003', 'd004'];
const departments = ['Management', 'Development', 'Sales', 'Marketing'];
let employeeId = [
  [100, 102, 103, 104, 500],
  [200, 201, 202, 203, 204, 205],
  [300, 301, 302, 303],
  [400, 401, 402]
];
let salaries = [
  [85000, 85000, 95000, 105000, 150000],
  [65000, 65000, 75000, 75000, 85000, 95000],
  [55000, 65000, 75000, 95000],
  [55000, 65000, 75000]
];
let employeeName = [
  ['Jack', 'James', 'Katie', 'Erin', 'Steve'],
  ['Mark', 'Bridget', 'Jenna', 'Alison', 'Mackenzie', 'Buster'],
  ['Mike', 'Beth', 'Jonathan', 'Lauren'],
  ['Frank', 'Joe', 'Kristen']
];
let totalSalaries = 0;
let grandTotalSalaries = 0;

for (var i = 0; i < departmentId.length; i++) {
  totalSalaries = 0;
  console.log(`\n${departments[i]}:`);
  for (var j = 0; j < salaries[i].length; j++) {
    totalSalaries += salaries[i][j];
    grandTotalSalaries += salaries[i][j];
    console.log(`   $${salaries[i][j]}  - ${employeeName[i][j]}`);
  }
  console.log(`-----------------------------------------\nTotal Salaries for ${departments[i]}: $${totalSalaries}\n-----------------------------------------`)
}
  console.log(`\n****************************************************\n Grand total for all department salaries:  $${grandTotalSalaries}\n****************************************************`)
