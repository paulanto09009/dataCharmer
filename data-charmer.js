// Readline //
var fs = require('fs');


//Global Variables and Arrays //
let departments = [[],[]]; // Departments and Department Names
let employeeName = [[],[]]; // Employee Name & Id
let employeeDepartment = [[],[]]; // Employee Id & Department
let employeeSalary = [[],[],[]];
let filteredEmpSalary = [[],[],[]];
let completeEmpProfile = [[],[],[],[]];


// Readline: Departments External File  //
fs.readFile('departments.txt', 'utf8', function(err, data) {
  if (err) throw err;

  let loopVar = data.split('\n');
  for (let i = 0; i < loopVar.length; i++) {
    

    departments[0] = loopVar[i].substring(0, 6).replace(/[(,),']/g, '');
    departments[1] = loopVar[i].substring(35, 6).replace(/[(,),']/g, '');
    
    //console.log(departments[0] + " " + departments[1]);

    // Test output below
    //console.log(departments[0]);
    //console.log(departments[1]);

  }
});



// Readline: Employee Id & Full Name  //
fs.readFile('employFile1.txt', 'utf8', function(err, data) {
  if (err) throw err;

  let loopVar = data.split('\n');
  for (let i = 0; i < loopVar.length; i++) {

    employeeName[0].push(loopVar[i].substring(0, 6).replace(/[(,),']/g, ''));
    employeeName[1].push(loopVar[i].substring(45, 20).replace(/[(,),']/g, ''));
    
    console.log(employeeName[1]);

    // Test output below
    //console.log(employeeName[0]);
    //console.log(employeeName[1]);

  }
});



// Readline: Employee Id & Department  //
fs.readFile('employFile2.txt', 'utf8', function(err, data) {
  if (err) throw err;

  let loopVar = data.split('\n');
  for (let i = 0; i < loopVar.length; i++) {

    employeeDepartment[0] = loopVar[i].substring(8, 15).replace(/[(,),']/g, '');
    employeeDepartment[1] = loopVar[i].substring(0, 8).replace(/[(,),']/g, '');
    

    // Test output below
    //console.log(employeeDepartment[0]);
    //console.log(employeeDepartment[1]);

  }
});


// Readline: Employee Id & Salary  //
fs.readFile('employFile3.txt', 'utf8', function(err, data) {
  if (err) throw err;

  let loopVar = data.split('\n');
  for (let i = 0; i < loopVar.length; i++) {

   employeeSalary[0] = loopVar[i].substring(0, 6).replace(/[(,),']/g, '');
   employeeSalary[1] = loopVar[i].substring(7, 14).replace(/[(,),']/g, '');
   employeeSalary[2] = loopVar[i].substring(25, 37).replace(/[(,),']/g, '');
    

    // Test output below
    //console.log(employeeSalary[0]);
    //console.log(employeeSalary[1]);

  }
});