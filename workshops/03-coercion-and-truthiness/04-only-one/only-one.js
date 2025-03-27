// YOUR CODE BELOW
const onlyOne = (firstValue,secondValue,thirdValue)=>{
    if(!!firstValue&&!secondValue&&!thirdValue ) 
        return true;
    else if(!!secondValue&&!firstValue&&!thirdValue)
        return true;
    else if(!!thirdValue&&!firstValue&&!secondValue)
        return true;
    else
        return false;
}

console.log(onlyOne(false, false, true));
console.log(typeof(onlyOne(1, 1, 1)));
console.log(onlyOne(1, 0, false));
console.log(onlyOne(null, 'hi!', undefined));
console.log(onlyOne(0, '', true));
console.log(onlyOne(false, null, undefined));
console.log(onlyOne('', -20, true));
console.log(onlyOne(true, null, 'i am truthy'));
console.log(onlyOne(true, 'pumpkin', 0));
console.log(onlyOne(true, 'yes!', 100));