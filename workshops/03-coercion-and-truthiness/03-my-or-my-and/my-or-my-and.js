// YOUR CODE BELOW
//if any one Value is truthy return that truthy value else return last falsey value
const myOr = (firstValue,secondValue,thirdValue) =>
    !!firstValue?firstValue:
    !!secondValue?secondValue:
    !!thirdValue?thirdValue:thirdValue;

//if any one value is falsey return that falsey value else return last truthy value
const myAnd = (firstValue,secondValue,thirdValue) =>
        !firstValue?firstValue:
        !secondValue?secondValue:
        !thirdValue?thirdValue:thirdValue;

console.log(myOr('apples', 1, false));
console.log(myOr(null, 'i am truthy', 'also true'));
console.log(myOr(false, false, true));
console.log(myOr('', 0, null));
console.log(myAnd(0, 1, false));
console.log(myAnd(20, '', 'i am truthy'));
console.log(myAnd(true, 'happy', 0));
console.log(myAnd('finally', 'we did it!', 'yay!'));
