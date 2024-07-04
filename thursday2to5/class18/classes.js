"use strict";
// non nullish assertion
class User {
    constructor(name1, email1, isMarried1) {
        this.name = name1;
        this.email = email1;
        this.isMarried = isMarried1;
    }
}
let user1 = new User("Faizan", "faizan@email.com", false);
let user2 = new User("Farman", "farman@email.com", false);
let user3 = new User("sarim", "sarim@email.com", false);
// console.log(user1);
// console.log(user2);
// console.log(user3);
class Animal {
    constructor(animalName, animalAge) {
        this.name = animalName;
        this.age = animalAge;
    }
    makeSound() {
        console.log(`${this.name} makes sound`);
    }
    getDetails() {
        console.log(`Animal Details: Name = ${this.name}, Age: ${this.age}`);
    }
}
// Inheritance
class Dog extends Animal {
    constructor(name1, age, dogBreed) {
        super(name1, age);
        this.breed = dogBreed;
    }
    makeSound() {
        console.log(`${this.name} barks`);
    }
}
let dog = new Dog("Pluto", 2, "German Shephered");
dog.makeSound();
