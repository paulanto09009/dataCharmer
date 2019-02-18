var fs = require('fs');

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
let importFile2 = [
  [],
  []
];
let data1Id = '';
let data1Name = '';
let data2Id = '';
let data2Dept = '';
let data3Id = '';
let data3Salary = '';
let data3Date = '';


function file1DataCollection(data1Id, data1Name, callback) {
  fs.readFile('dataFile1.txt', 'utf8', function(err, data) {
    if (err) throw err;

    let dataLoop = data.split('\n')
    for (let i = 0; i < dataLoop.length; i++) {

      data1Id = dataLoop[i].substring(0, 6).replace(/[(,),']/g, '');
      data1Name = dataLoop[i].substring(50, 20).replace(/[(,),']/g, '');

      callback(data1Id, data1Name);
    }
  })
} // ** end of file1DataCollection



function file2DataCollection(data2Id, data2Dept, callback) {
  fs.readFile('dataFile2.txt', 'utf8', function(err, data) {
    if (err) throw err;

    let dataLoop = data.split('\n')
    for (let i = 0; i < dataLoop.length; i++) {

      data2Id = dataLoop[i].substring(0, 6).replace(/[(,),']/g, '');
      data2Dept = dataLoop[i].substring(12, 6).replace(/[(,),']/g, '');

      callback(data2Id, data2Dept);
    }
  })
} // ** end of file2DataCollection


function file3DataCollection(data3Id, data3Salary, data3Date, callback) {
  fs.readFile('dataFile3.txt', 'utf8', function(err, data) {
    if (err) throw err;

    let dataLoop = data.split('\n')
    for (let i = 0; i < dataLoop.length; i++) {

      data3Id = dataLoop[i].substring(0, 6).replace(/[(,),']/g, '');
      data3Salary = dataLoop[i].substring(7, 14).replace(/[(,),']/g, '');
      data3Date = dataLoop[i].substring(25, 37).replace(/[(,),']/g, '');

      callback(data3Id, data3Salary, data3Date);
    }
  })
} // ** end of file3DataCollection



file1DataCollection(data1Id, data1Name, function(data1Id, data1Name) {
  //console.log(data1Id);
  //console.log(data1Name);

  file2DataCollection(data2Id, data2Dept, function(data2Id, data2Dept) {
    //console.log(data2Id);
    //console.log(data2Dept);

    file3DataCollection(data3Id, data3Salary, data3Date, function(data3Id, data3Salary, data3Date) {
      //console.log(data2Id);
      //console.log(data2Dept);
      
      console.log(`${data1Id}, ${data1Name}, ${data2Id}, ${data2Dept}, ${data3Id}, ${data3Salary}, ${data3Date} `);
    });
  });
});
