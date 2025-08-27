//เเบบ CommonJS
const dti01 = require("./my-module01.js");
const {sauXX, scoreXX} = require("./my-module02.js");

console.log(dti01.score);
dti01.score = 0;
console.log(dti01.score);

console.log(`10 + 20 = ${dti01.sumNumber(10, 20)}`);
console.log(`สี่เหลี่ยมกล้าง 100 ยา่ว 50 มีพื้นที่ = ${dti01.squareArea(100, 50)} ตารางเมตร`);

console.log(`SAU คือ ${dti01.sau}`);

console.log(scoreXX);
console.log(sauXX);
scoreXX = 111
