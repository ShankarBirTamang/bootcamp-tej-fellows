// YOUR CODE BELOW
const exponentiate = (base, power) => {
    if(power < 0 ){
        return 'Power argument must not be less than 0';
    }else if(power === 0){
        return 1;
    }
    let result = 1;
    for (let i = 0; i < power; i++) {
        result *= base;
    }
    return result;
}

console.log(exponentiate(2,2));
console.log(exponentiate(3,4));