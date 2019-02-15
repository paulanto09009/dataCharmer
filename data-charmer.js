let employFile2 = '';


// Employee File 1
function processFile(inputFile) {
    var fs = require('fs'),
        readline = require('readline'),
        instream = fs.createReadStream(inputFile),
        outstream = new (require('stream'))(),
        rl = readline.createInterface(instream, outstream);
     
    rl.on('line', function (line) {
        employFile2 = console.log(line.replace(/[.,\s,(),']/g, ' '));
    });

}
processFile('employFile1.txt');

/*
//Employee File 2
function processFile2(inputFile) {
    var fs = require('fs'),
        readline = require('readline'),
        instream = fs.createReadStream(inputFile),
        outstream = new (require('stream'))(),
        rl = readline.createInterface(instream, outstream);
     
    rl.on('line', function (line) {
        employFile2 = console.log(line.split());
    });

}
processFile2('employFile2.txt');
*/
/*
//Employee File 3
function processFile3(inputFile) {
    var fs = require('fs'),
        readline = require('readline'),
        instream = fs.createReadStream(inputFile),
        outstream = new (require('stream'))(),
        rl = readline.createInterface(instream, outstream);
     
    rl.on('line', function (line) {
        employFile2 = console.log(line.split());
    });

}
processFile2('employFile3.txt');
*/