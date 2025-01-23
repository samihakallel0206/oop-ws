// ! Class et  Création  d'object
// object
// let utilisateur = {
//   nom: "Amine",
//   age: 30,
// };
// console.log(utilisateur);
// console.log(typeof utilisateur);

// // **********************************************************************************
// Fonctionnalité d'objet avec constructeur
// function Personne(nom, age) {
//   //propriétés
//   this.nom = nom;
//   this.age = age;
//   //méthodes(action)
//   this.sePresenter = () => {
//     return `Bonjour, mon nom est ${this.nom}, j'ai ${this.age} ans.`;
//   };
// }
// const personne1 = new Personne("Amine", 35);
// // console.log(personne1.age);
// const personne2 = new Personne("Amel", 30);
// console.log(personne2.sePresenter());
// // *************************************************************************************************
// Définir une classe basique avec méthode
// class PersonneClass {
//   // prprités
//   constructor(nom, age) {
//     this.nom = nom;
//     this.age = age;
//   }
//   // méthode
//   bonjour() {
//     return `Bonjour, mon nom est ${this.nom}, j'ai ${this.age} ans.`;
//   }
// }

// const personne3 = new PersonneClass("Imen", 30);
// console.log(personne3.bonjour());
// console.log(personne3.nom);

// // *******************************************************************************************************
// Encapsulation (Propriétés privées et publiques)
// class CompteBancaire {
//   #solde; // Propriété privée (introduite en ES2022)

//   constructor(soldeInitial) {
//     this.#solde = soldeInitial;
//   }

//   deposer(montant) {
//     this.#solde += montant;
//   }

//   obtenirSolde() {
//     return this.#solde;
//   }
// }

// const compte = new CompteBancaire(1000);
// compte.deposer(500);
// console.log(compte.obtenirSolde());

// // *****************************************************************************************
// Héritage en POO
// class Animal {
//   constructor(nom) {
//     this.nom = nom;
//   }

//   faireSon() {
//     return `${this.nom} fait un bruit.`;
//   }
// }
// class Chien extends Animal {
//   constructor(nom, race) {
//     super(nom);
//     this.race = race;
//   }
//   sauter() {
//     return `${this.nom} saute.`;
//   }
// }
// const chien = new Chien("Jar", "Pitbull");
// console.log(chien.faireSon());
// console.log(chien.sauter());
// const chat = new Animal("liza", "siamoa");
// console.log(chat.faireSon());
// console.log(chat.race);

// ***********************************************************************************
// Polymorphisme : Plusieurs classes avec la même méthode "faireSon"
// class AnimalPolymorph {
//   constructor(nom) {
//     this.nom = nom;
//   }
//   faireSon() {
//     return `${this.nom} faire un bruit.`;
//   }
// }
// class Chien extends AnimalPolymorph {
//   faireSon() {
//     return `${this.nom} aboie.`;
//   }
// }
// class Chat extends AnimalPolymorph {
//   faireSon() {
//     return `${this.nom} miaule.`;
//   }
// }

// const animaux = [
//   new Chien("Buddy"),
//   new Chat("Whiskers"),
//   new AnimalPolymorph("Trois Animaux"),
// ];

// animaux.forEach((animal) => {
//   console.log(animal.faireSon());
// });

// *****************************************

// correction de exo es6
// function accum(s) {
//   return;
//   s.split("")
//     .map((char, index) => char.toUpperCase() + char.toLowerCase().repeat(index)) // Formate chaque lettre
//     .join("-");
// }
// console.log(
//   "abAc"
//     .split("")
//     .map((char, index) => char.toUpperCase() + char.toLowerCase().repeat(index))
//     .join("-")
// );
