// YOUR CODE BELOW

const bacteriaTime = (currentNum , targetNum) => {
    if(currentNum > targetNum){
        return 'targetNum must be larger than currentNum';
    }
    let currentTime = 0;
    while(currentNum < targetNum){
        currentNum *= 2;
        currentTime +=20;
    }
    return currentTime;
}

console.log(bacteriaTime(110,50));