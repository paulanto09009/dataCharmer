
var fs = require('fs');

function ReadAppend(file, appendFile){
  fs.readFile(appendFile, function(err, data) {
    if (err) throw err;
    console.log('File was read');
    
  fs.appendFile(file, data, function (err) {
    if (err) throw err;
    console.log('The \'data to append\' was appended to file!');
    });
    
    });
}

file = 'appended-data.txt';
appendFile = 'departments.txt';
ReadAppend(file, appendFile);

appendFile = 'employFile1.txt';
ReadAppend(file, appendFile);

appendFile = 'employFile2.txt';
ReadAppend(file, appendFile);

appendFile = 'employFile3.txt';
ReadAppend(file, appendFile);

