var fs = require("fs");

var data = fs.readFileSync("testfile2.txt","utf8");

console.log(data);