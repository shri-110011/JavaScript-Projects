var fs = require('fs');
var readFileSystem = fs.createReadStream("input.txt");
var writeFileStream = fs.createWriteStream("output.txt");
readFileSystem.pipe(writeFileStream);
