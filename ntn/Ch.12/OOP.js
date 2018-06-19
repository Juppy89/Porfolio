//Object oriented programming involves seperating code into objects that have properties and methods.

Encapsulation

This demonstrates the concept of encapsulation: the inner workings are kept hidden inside the object and only the essential functionalities are exposed to the end user, such as the 'on' button.


Polymorphism

In OOP, this means various objects can share the same method, but also have the ability to override shared methods with a more specific implementation.

Inheritance

taking the features of one object then adding some new features. In OOP, this means we can take an object that already exists and inherit all its properties and methods. We can then improve on its functionality by adding new properties and methods.

CONSTRUCTOR FUNCTIONS

Built-In Constructor Functions

JavaScript contains a number of built-in constructor functions such as Object, Array, and Function that can be used to create objects, arrays and functions instead of literals.

The easiest way to create a new object is to use the literal syntax:

const literalObject = {};
<< {}

It is also possible to use the Object constructor function:

constructedObject = new Object();
<< {}

CONSTRUCTOR PROPERTY

All objects have a constructor property that returns the constructor function that created it:

blueDice.constructor
<< [Function: Dice]

When an object literal is used to create a new object, we can see that in the background, the Object constructor function is being used:

const literalObject = {};
<< {}

literalObject.constructor
<<[Function: Object]

STATIC METHODS

class Dice {
    constructor(sides=6) {
        this.sides = sides;
    }

    roll() {
        return Math.floor(this.sides * Math.random() + 1)
    }

    static description() {
        return 'A way of choosing random numbers'
    }
}

Prototypal inheritance

class Turtle {
    constructor(name) {
        this.name = name;
        this.weapon = 'hands';
    }
    sayHi() {
        return `Hi dude, my name is ${this.name}`;
    }
    attack(){
        return `Feel the power of my ${this.weapon}!`;
    }
}
const leo = new Turtle('Leonardo');
<< Turtle { name: 'Leonardo' }

The variable leo points to an instance of the Turtle class. It has a name property and a sayHi() method that references the name property:

leo.name;
<< 'Leonardo'

leo.sayHi();
<<'Hi dude, my name is Leonardo'

There are a number of ways to find the prototype of an object. One way is to go via the constructor function’s prototype property:

raph.constructor.prototype;
<< Turtle { attack: [Function], weapon: 'Hands' }

Another way is to use the Object.getPrototypeOf() method, which takes the object as a parameter:

Object.getPrototypeOf(raph);
<< Turtle { attack: [Function], weapon: 'Hands' }

Many JavaScript engines also support the non-standard __proto__ property. This is known as dunder proto, which is short for 'double underscore proto':

raph.__proto__
<< Turtle { attack: [Function], weapon: 'Hands' }


“
These properties will now become an 'own property' of the instance object:

leo
    << Turtle { name: 'Leonardo', weapon: 'Katana Blades' }

Any own properties will take precedence over the same prototype property when used in methods:

leo.attack();
<< 'Feel the power of my Katana Blades!'

When a property or method is called, the JavaScript engine will check to see if an object has its own property or method. If it does, it will use that one; otherwise, it will continue up the prototype chain until it finds a match or reaches the top of the chain.

What Should the Prototype Be Used For?

    The prototype can be used to add any new properties and methods after the class has been declared. It should be used to define any properties that will remain the same for every instance of the class. The weapon example was unsuitable because all the turtles use a different weapon (we just used it in the example above to demonstrate overwriting). They do, however, like the same food — pizza! This makes a good candidate for a prototype property, if it wasn't included in the original class declaration:

Turtle.prototype.food = 'Pizza';

Methods are likely to be the same for all instances[…]

INHERITANCE



