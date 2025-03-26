// YOUR CODE BELOW

const defaultGreet = (firstName , lastName='Doe') => {
    let name = '';
    name = `Hi ${firstName} ${lastName}!`;
    return name;
}

console.log(defaultGreet('Chaka','Khan'));
console.log(defaultGreet('John'));
