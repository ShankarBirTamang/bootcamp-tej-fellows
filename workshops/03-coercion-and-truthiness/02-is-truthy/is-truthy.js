// YOUR CODE BELOW
const isTruthy = (anyValue)=>{
    if(!!anyValue)
        return true;

    if(anyValue=== false)
        return 'The boolean value false is falsey';

    if(anyValue === null)
        return 'The null value is falsey';

    if(anyValue === 0)
        return 'The number 0 is falsey (the only falsey number)';

    if(anyValue === '')
        return 'The empty string is falsey (the only falsey string)';

    return 'undefined is falsey';
}

console.log(isTruthy('I yearn for truth'));
console.log(isTruthy(0));
console.log(isTruthy(false));
console.log(isTruthy(null));
console.log(isTruthy(''));
console.log(isTruthy());