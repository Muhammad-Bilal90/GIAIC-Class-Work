class Animal {
    name = "Elephant";
    weight = 500;
    getWeight() {
        console.log(this.weight);
    }
    getName() {
        console.log(this.name);
    }
}
let animalObj1 = new Animal();
let animalObj2 = new Animal();
let animalObj3 = new Animal();
// console.log(animalObj1, animalObj2, animalObj3);
function MyFunc(name, age) {
    this.name = name;
    this.age = age;
    this.printMe = () => {
        return this.name;
    };
}
let newFunc = new MyFunc("Bilal", 25);
console.log(newFunc.printMe());
export {};
