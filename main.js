"use strict";
//Exercices from Codeacademy:
//Type Inferences. 
let aged = true;
let realAge = 0;
if (aged) {
    realAge = 4;
}
let dogAge = realAge * 7;
console.log(`${dogAge} years`); //so if the dog is 4 years old he is 28 years old in human years!
//Type Shapes
let firstName = 'muriel!';
console.log(firstName.toUpperCase());
console.log(firstName.length); //this results in "MURIEL!" and "7"
//Any:
let guess;
guess = "yellow";
guess = 7;
//Variable Type Annotations. Here I get some error in the console log which I don't quite understand.
let phoneNumber;
if (Math.random() > 0.5) {
    phoneNumber = "+61770102062";
}
else {
    phoneNumber = "7167762323";
}
//Other Exercices:
//Arrithmetic Operations
5 + 5;
5 * 5;
//String Interpolation and Prompts 
//this was from a javascript video that was quite dated, I tried changing "var" to "let" and "const" but it didn't work. I'm still learning what's what!
var fornafn = prompt("Hvert er fornafn þitt?"); //what is your first name
var eftirnafn = prompt("Hvert er eftirnafn þitt?"); //what is your last name
var aldur = prompt("Hver er aldur þinn?"); //how old are you
console.log("Nafnið þitt er " + fornafn + " " + eftirnafn + ".");
console.log("Aldur þinn er " + aldur + "."); //there needs to be space around the " " so the names and age appear correctly
//this results in "Your name is John Johnsson. You are 50 years old."
