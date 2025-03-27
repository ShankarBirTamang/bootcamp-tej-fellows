// YOUR CODE BELOW
const howEqual = (firstValue,secondValue) => 
    firstValue===secondValue? 'strictly' :
    firstValue == secondValue? 'loosely':'not equal';

console.log(howEqual(0, '0'));
console.log(howEqual(3, 9/3));
console.log(howEqual(true, 'truthy'));