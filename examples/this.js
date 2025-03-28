let a = {name: 'Sanjeev'}
let b = {name: 'Sankar'}
function sayHello() {console.log('hello to', this.name)}
a.greet = sayHello
b.greet = sayHello
a.greet()
b.greet()

/*
Explanation:

Function Definition (sayHello)
The function sayHello is defined separately and does not belong to any object initially.

Assigning the Function to Objects (a.greet = sayHello and b.greet = sayHello)

The function sayHello is assigned as a method (greet) to both objects a and b.

Calling a.greet()

When calling a.greet(), this refers to a because greet is invoked as a method of a.

this.name inside sayHello will be 'Sanjeev'.


Calling b.greet()

Similarly, b.greet() is invoked as a method of b, so this refers to b.

this.name inside sayHello will be 'Sankar'.


Key Concept:
In JavaScript, the value of this is determined at runtime, depending on how a function is called.

Since sayHello is called as a method on a and b, this refers to the object before the dot (.).

*/