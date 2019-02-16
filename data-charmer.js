var fs = require('fs');

let employeeNumber = '';

fs.readFile('employFile2.txt', 'utf8', function(err, data) {
  if (err) throw err;

  employeeNumber = data.split('\n')
  for (let i = 0; i < employeeNumber.length; i++) {
    for (let j = 0; j < employeeNumber[i].length; j++);
    console.log(employeeNumber[i].substring(0, 6).replace(/[(,),']/g, '') + ' ' + employeeNumber[i].substring(12, 6).replace(/[(,),']/g, ''));
  }

})
