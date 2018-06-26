****NOTES****

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

Object.getPrototypeOf(Object.getPrototypeOf(raph))
    << {}

If we try find the next prototype, we receive null:

Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(raph)))
<< null

THE OBJECT CONSTRUCTOR

all objects ultimately inherit from the prototype of the Object() constructor function

ENUMERABLE PROPERTIES

means properties of an object will not show up when a for-in loop is used to loop through and object''s properties and methods.

There is a method called propertyIsEnumerable() that every object has (because it’s a method of Object.prototype) that can be used to check if a property is enumerable. We can see in the following example that the eat() method we created earlier is enumerable (in fact, all properties and methods that are created by assignment are enumerable):

Turtle.prototype.propertyIsEnumerable('eat');
<< true

All objects inherit a toString() method from Object.prototype, but it’s not enumerable, so it won’t show up in any objects:

Object.prototype.propertyIsEnumerable('toString');
<<false

Good practice is for all built-in methods to be non-enumerable.

class Turtle {
    constructor(name) {
        this.name = name;
    }
    sayHi() {
        return `Hi dude, my name is ${this.name}`;
    }

    swim() {
        return `${this.name} paddles in the water`;
    }
}

This class declaration is similar to before, and defines properties and methods for a normal turtle. In our previous example, we then started adding more specific properties such as weapons that don't really apply to normal turtles, they are for ninja turtles. Instead of polluting the Turtle class with these properties, it would be a good idea to create a sub-class or child class of the Turtle class called ninjaTurtle. This is created in a similar fashion, using a class declaration, but notice the use of the extends keyword:

class NinjaTurtle extends Turtle {
    constructor(name) {
        super(name);
        this.weapon = 'hands';
    }
    attack() { return `Feel the power of my ${this.weapon}!` }
}

Inside the child class declaration, the keyword super refers to the parent class, and can be used to access any properties and call any methods of the parent class. In the example above we use it to call the constructor function of the Turtle class.


Number.prototype.isEven = function() {
    return this%2 === 0;
}

Number.prototype.isOdd = function() {
    return this%2 === 1;
}

To create one of your new array objects, use the new keyword:

const list = new myArray(1,2,3);
<< myArray [ 1,2,3 ]

Now we can check that our delete() method works:

list.delete(1);
myArray [ 2 ]

list
    << myArray [ 1, 3 ]

To get and set Property Descriptors

Object.getOwnPropertyDescriptor(me,'name');
<< { value: 'DAZ',
    writable: true,
    enumerable: true,
    configurable: true }


EXAMPLE

const Superhuman = Object.create(Human);

Superhuman.change = function() {
    return `${this.realName} goes into a phone box and comes out as ${this.name}!`;
};
Superhuman.name = 'Name Needed';
<< 'Name Needed'

Superhuman.realName = 'Real Name Needed';
<< 'Real Name Needed'

Now we can use the Superhuman object as a prototype to create more objects based on it:

const superman = Object.create(Superhuman);

Once a Superhuman object has been created, we can overwrite the default properties by assignment:

superman.name = 'Superman';
superman.realName = 'Clark Kent';

Now we can see that it has inherited the change() method from the Superhuman object:

superman.change()


MIXINS

A mixin is a way of adding properties and methods of some objects to another object without using inheritance. It allows more complex objects to be created by ‘mixing’ basic objects together.

To avoid only a shallow copy, we're going to create our own mixin() function that will assign all properties of an object to another object as a deep copy.

This means that every object will inherit this method and be able to use it to augment itself with the properties and methods from other objects.

function mixin(target,...objects) {
    for (const object of objects) {
        if(typeof object === 'object') {
            for (const key of Object.keys(object)) {
                if (typeof object[key] === 'object') {
                    target[key] = Array.isArray(object[key]) ? [] : {};
                    mixin(target[key],object[key]);
                } else {
                    Object.assign(target,object);   }
            }
        }
    }
    return target;
}

BIND
The bind() method is a method for all functions and is used to set the value of this in the function. If this is provided as an argument to bind() while it’s still in scope, any reference to this inside the nested function will be bound to the object calling the original method:

superman.findFriends = function() {
    this.friends.forEach(function(friend) {
        console.log(`${friend.name} is friends with ${this.name}`);
    }.bind(this);)
}
superman.findFriends();
<<  Batman is friends with Superman
Wonder Woman is friends with Superman
Aquaman is friends with Superman


