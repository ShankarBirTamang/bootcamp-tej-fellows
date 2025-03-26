// YOUR CODE BELOW

const maxOfThree = (firstNum , secondNum , thirdNum)=>{
    if(firstNum >= secondNum && firstNum >= thirdNum){
        return firstNum;
    }else if(secondNum >= firstNum && secondNum >= thirdNum){
        return secondNum;
    }else{
        return thirdNum;
    }
}

console.log(maxOfThree(5,4,10));
console.log(maxOfThree(7,7,4));