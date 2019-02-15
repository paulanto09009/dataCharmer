var fs = require('fs');

  let newArr = [];
  let newArr2 = [];
  
fs.readFile('employFile2.txt', 'utf8', function(err, data) {
  if (err) throw err;

  let arraydat = data.split('\n');

  let arr = arraydat;



  while (arr.length) newArr.push(arr.splice(0, 1));

  for (var i = 0; i < newArr.length; i++) {
    console.log(newArr[i]);
    newArr.splice(0, 1);

  }
  
})

