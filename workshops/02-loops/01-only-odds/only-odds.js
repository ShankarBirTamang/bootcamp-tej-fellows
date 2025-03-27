// YOUR CODE BELOW
const onlyOdds = (number) => {
    let sum = 0;
    for (let i = 0; i < number; i++) {
        if (i % 2 !== 0) {
            sum += i;
        }
    }
    return sum;
}
console.log(onlyOdds(6));