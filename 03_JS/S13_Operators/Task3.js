var x = 10;

var y = 1;

var result = ++x + y++ + ++y + ++y + x++;

console.log(result); //30
console.log(x, y); //12 4
