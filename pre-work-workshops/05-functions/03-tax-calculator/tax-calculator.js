// YOUR CODE BELOW

const taxCalculator = (price , state) => {
    const NYtax = 0.04;
    const NJtax = 0.06625;
    const afterTaxCost = price * (1 + (state === 'NY' ? NYtax : NJtax));
    return afterTaxCost;
}

console.log(taxCalculator(100,'NY'));
console.log(taxCalculator(100,'NJ'));