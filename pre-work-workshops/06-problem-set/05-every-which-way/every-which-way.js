// YOUR CODE BELOW
const everyWhichWay = (firstNum,secondNum,thirdNum) =>{
    const sumCondition = firstNum + secondNum ===thirdNum ;
    const diffCondition = firstNum - secondNum === thirdNum;
    const prodCondition = firstNum * secondNum === thirdNum;
    const fracCondition = firstNum / secondNum === thirdNum;

    return sumCondition?
        'sum':diffCondition?
            'difference':prodCondition?
                'product':fracCondition?
                    'fraction':null;
}

console.log(everyWhichWay(10,20,30));
console.log(everyWhichWay(50, 20, 30));
console.log(everyWhichWay(4, 4, 16));
console.log(everyWhichWay(100, 10, 10));
console.log(everyWhichWay(1, 1000, 50));