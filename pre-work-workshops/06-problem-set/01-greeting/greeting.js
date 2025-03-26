// YOUR CODE BELOW
const greeting = (name) => {
    let greetString = `Hello ${name}!`;
    return name?greetString:'Hello!';
}
console.log(greeting('John'));
console.log(greeting());