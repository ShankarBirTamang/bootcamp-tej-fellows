// YOUR CODE BELOW
function getMax(firstNumber, secondNumber, thirdNumber) {
    if (firstNumber > secondNumber) {
        if (firstNumber > thirdNumber) {
            return firstNumber;
        } 
        return thirdNumber;
    } else if (secondNumber > thirdNumber) {
        return secondNumber;
    }else {
        return thirdNumber;
    }
}
