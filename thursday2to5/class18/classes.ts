// non nullish assertion
class User {
  email: string;
  name: string;
  isMarried: boolean;

  constructor(name1: string, email1: string, isMarried1: boolean) {
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

interface AnimalType {
  name: string;
  age: number;
  makeSound: () => void;
}

class Animal implements AnimalType {
  name: string;
  age: number;

  constructor(animalName: string, animalAge: number) {
    this.name = animalName;
    this.age = animalAge;
  }

  makeSound(): void {
    console.log(`${this.name} makes sound`);
  }

  getDetails() {
    console.log(`Animal Details: Name = ${this.name}, Age: ${this.age}`);
  }
}

// Inheritance
class Dog extends Animal {
  breed: string;

  constructor(name1: string, age: number, dogBreed: string) {
    super(name1, age);
    this.breed = dogBreed;
  }
  // Override the makeSound method (POLYMORPHISM)
  makeSound(): void {
    console.log(`${this.name} barks`);
  }
}

let dog: Dog = new Dog("Pluto", 2, "German Shephered");

dog.makeSound();
