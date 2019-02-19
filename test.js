let data1Id = new Array();
let data1Name = new Array();
let data2Id = new Array();
let data2Dept = new Array();

var fs = require('fs');

fs.readFile('dataFile1.txt', 'utf8', function(err, data) {
  if (err) throw err;
  let dataLoop = data.split('\n');
  for (var i = 0; i < dataLoop.length; i++) {
    data1Id.push(dataLoop[i].substring(0, 6).replace(/[(,),']/g, ''));
    data1Name.push(dataLoop[i].substring(50, 20).replace(/[(,),']/g, ''));
  }

}); // ** end of dataFile1.txt readline

fs.readFile('dataFile2.txt', 'utf8', function(err, data) {
  if (err) throw err;
  let dataLoop = data.split('\n')
  for (let i = 0; i < dataLoop.length; i++) {
    data2Id.push(dataLoop[i].substring(0, 6).replace(/[(,),']/g, ''));
    data2Dept.push(dataLoop[i].substring(12, 6).replace(/[(,),']/g, ''));
  }

  outputFile1();

}); // ** end of file2DataCollection



function outputFile1() {
  for (var i = 0; i < data1Id.length; i++) {
    for (var j = 0; j < data1Name[i][j].length; j++) {
    }
  }
  for (var i = 0; i < data2Id.length; i++) {
    for (var j = 0; j < data2Dept[i][j].length; j++) {
      console.log(data2Id[i], data2Dept[i],data1Id[i], data1Name[i]);
    }
  }
}




/*
function file3DataCollection() {
  fs.readFile('dataFile3.txt', 'utf8', function(err, data) {
    if (err) throw err;

    let dataLoop = data.split('\n')
    for (let i = 0; i < dataLoop.length; i++) {

      data3Id = dataLoop[i].substring(0, 6).replace(/[(,),']/g, '');
      data3Salary = dataLoop[i].substring(7, 14).replace(/[(,),']/g, '');
      data3Date = dataLoop[i].substring(25, 37).replace(/[(,),']/g, '');

      if (data3Date === '9999-01-01') {
        console.log(data3Id, data3Salary, data3Date);
      }
    }
  })
} // ** end of file3DataCollection
*/
