var x = 100; //102
var y = 200; //199//200

var result = x++ + --y + y++ - ++x;
//  100 + 199 + 199 - 102 ==396

console.log(result, x, y); //398 102 200
//402 102 202

console.log(5 ** 56);
