const os=require("os");

var totmem=os.totalmem();
var freemem=os.freemem();

console.log(`Total Memory : ${totmem}`)
console.log(`Free  Memory : ${freemem}`)