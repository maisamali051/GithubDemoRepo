// let args = process.argv;
// for(let i=2;i<args.length;i++)
//     console.log("Hello and welcome to",args[i]);

//module.export demo
const someVal = require("./math");
console.log(someVal.val);
console.log(someVal.div(2,4));