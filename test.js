let dataDeptId = new Array();
let dataDeptName = new Array();
let data1Id = new Array();
let data1Name = new Array();
let data2Id = new Array();
let data2Dept = new Array();
let data3Id = new Array();
let data3Salary = new Array();
let data3Date = new Array();

var fs = require('fs');

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2
});

function test() {

  fs.readFile('departments.txt', 'utf8', function(err, data) {
    if (err) throw err;
    var dataLoop = data.split('\n');
    for (var i = 0; i < dataLoop.length; i++) {
      dataDeptId.push(dataLoop[i].substring(0, 6).replace(/[(,),']/g, ''));
      dataDeptName.push(dataLoop[i].substring(6, 35).replace(/[(,),']/g, ''));
      console.log(dataDeptId[i], dataDeptName[i]);
    }
  });

  fs.readFile('dataFile1.txt', 'utf8', function(err, data) {
    if (err) throw err;
    let dataLoop = data.split('\n');
    for (var i = 0; i < dataLoop.length; i++) {
      data1Id.push(dataLoop[i].substring(0, 6).replace(/[(,),']/g, ''));
      data1Name.push(dataLoop[i].substring(50, 20).replace(/[(,),']/g, ''));
    }
    for (var i = 0; i < data1Id.length; i++) {
      for (var j = 0; j < data1Name[i][j].length; j++) {
        console.log(data1Id[i], data1Name[i]);
      }
    }
  }); // ** end of dataFile1.txt readline


  fs.readFile('dataFile3.txt', 'utf8', function(err, data) {
    if (err) throw err;
    let dataLoop = data.split('\n')
    for (let i = 0; i < dataLoop.length; i++) {
      data3Id.push(dataLoop[i].substring(0, 6).replace(/[(,),']/g, ''));
      data3Salary.push(dataLoop[i].substring(7, 14).replace(/[(,),']/g, ''));
      data3Date.push(dataLoop[i].substring(25, 37).replace(/[(,),']/g, ''));
    }
    for (var i = 0; i < data3Id.length; i++) {
      for (var j = 0; j < data3Salary[i][j].length; j++) {
        for (var k = 0; k < data3Date[i][k].length; k++) {
          if (data3Date[i] == '9999-01-01') {
            console.log(data3Id[i], data3Salary[i], data3Date[i]);
          }
        }
      }
    }
  }); // ** end of file3DataCollection


  fs.readFile('dataFile2.txt', 'utf8', function(err, data) {
    if (err) throw err;
    let dataLoop = data.split('\n')
    for (let i = 0; i < dataLoop.length; i++) {
      data2Id.push(dataLoop[i].substring(0, 6).replace(/[(,),']/g, ''));
      data2Dept.push(dataLoop[i].substring(12, 6).replace(/[(,),']/g, ''));
    }
    for (var i = 0; i < data2Dept.length; i++) {
      for (var j = 0; j < dataDeptId.length; j++) {
        if (data2Dept[i] == dataDeptId[j]) {
          console.log('test', data1Name[i], dataDeptId[j], data2Dept[i], dataDeptName[j], data3Id[i], data3Salary[i], data3Date[i]);
        }
      }
    }
  }); // ** end of file2DataCollection



} // ** end of function **


test()
