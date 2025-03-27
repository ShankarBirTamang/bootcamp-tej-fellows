// YOUR CODE BELOW
const mySlice = (str,startIdx , endIdx) => {
    let startIndex = startIdx? startIdx : 0;
    let endIndex = endIdx? endIdx : str.length;
    let slicedString = '';
    for(let i=startIndex; i<endIndex; i++){
        slicedString += str[i];
    }
    return slicedString;
}

console.log(mySlice('slice and dice',2));
console.log(mySlice('slice and dice',2,5));
console.log(mySlice('slice and dice'));