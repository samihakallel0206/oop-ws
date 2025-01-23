// ! Class and Object Creation
// // object
// let user = {
//     name: "Amine",
//     age: 30
// }
// console.log(user)
// console.log(typeof user)

// **********************************************************************************
// // functioal object
// function Person(name, age) {//parametre
//     //properties
//     this.name = name;
//     this.age = age;
//     //method
//     this. greet = ()=> {
//         return `Hello, my name is ${this.name}
//     and I'm ${this.age} years old.`;
//   }
// }
// // Create an instance (object) of the Person class
// const person1 = new Person("Amine", 30);//argument
// const person2 = new Person("Amel", 30);//argument
// const person3 = new Person("Imen", 30);//argument
// const person4 = new Person("Amina", 30);//argument
// const person5 = new Person("Ahmed", 30);//argument
// console.log(person2.greet()); // Output: Hello, my name is Alice and I'm 30 years old.

// *************************************************************************************************
// Define a basic class
// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   greet() {
//     return `Hello, my name is ${this.name} and I'm ${this.age} years old.`;
//   }
// }

// // Create an instance (object) of the Person class
// const person1 = new Person("Amine", 30);
// console.log(person1)
// console.log(person1.greet());
// *******************************************************************************************************
// //! Encapsulation (Private and Public Members)
// class BankAccount {
//   #balance; // Private property (introduced in ES2022)

//   constructor(initialBalance) {
//     this.#balance = initialBalance;
//   }

//   deposit(amount) {
//     this.#balance += amount;
//   }

//   getBalance() {
//     return this.#balance;
//   }
// }
// // console.log(BankAccount)
// const account = new BankAccount(1000);
// console.log(account)
// account.deposit(500);
// console.log(account.getBalance());

// *****************************************************************************************
//  !Inheritance

// class Animal {
//   constructor(name) {
//     this.name = name;
//   }

//   speak() {
//     return `${this.name} makes a noise.`;
//   }
// }
// // const lion = new Animal("three")
// // console.log(lion)
// class Dog extends Animal {
//     constructor(name,race) {
//         super(name);
//         this.race = race;
//     }
//   jump() {
//     return `${this.name} is jumping`;
//     }

// }

// const chien = new Dog("jar", "pitbull")

// const dog = new Dog("Buddy", "pekinois");
// console.log(dog.speak());
// console.log(dog.jump());

//**************************************************************************************
//  !Polymorphism

// class Animal {
//   constructor(name) {
//     this.name = name;
//   }

//   speak() {
//     return `${this.name} makes a noise.`;
//   }
// }

// class Dog extends Animal {
//   speak() {
//     return `${this.name} barks.`;
//   }
// }

// class Cat extends Animal {
//   speak() {
//     return `${this.name} meows.`;
//   }
// }
// console.log(Dog)
// const chien = new Dog('loullou')
// console.log(chien)
// // // Polymorphic behavior
// const animals = [
//   new Dog("Buddy"),
//   new Cat("Whiskers"),
//   new Animal("three animal"),
// ];

// animals.forEach((animal) => {
//   console.log(animals.speak());
// });
// ***********************************************************************************

