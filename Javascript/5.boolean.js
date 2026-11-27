let True = true;
let False = false;

console.log(True);
console.log(False);

// console.clear();

// !! : value -> boolean converting operator
// Falshy
console.log(!!0);
console.log(!!-0);
console.log(!!''); // empty string
console.log(!!null);
console.log(!!undefined);
console.log(!!NaN);

// Truthy
console.log(!!1); // number except 0,-0
console.log(!!-1);
console.log(!!'false'); // not empty string
console.log(!!{}); // empty object, any object
console.log(!!Infinity);
console.log(!!-Infinity);
