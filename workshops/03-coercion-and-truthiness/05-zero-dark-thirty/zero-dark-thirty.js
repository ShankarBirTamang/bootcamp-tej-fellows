// YOUR CODE BELOW
const zeroDarkThirty = (numValue) =>{
    if(numValue === 0) return NaN;
   
    let stringValue = String(numValue);
    let newValue = '';

    for(let i=0; i<stringValue.length; i++){
        let currentChar = stringValue[i];

        if(currentChar !== '0')
            newValue += currentChar;
    }
    return Number(newValue);

}

console.log(typeof(zeroDarkThirty(10)));
console.log(zeroDarkThirty(10000000000));
console.log(zeroDarkThirty(0));
console.log(zeroDarkThirty(102302));
console.log(zeroDarkThirty(606.203));