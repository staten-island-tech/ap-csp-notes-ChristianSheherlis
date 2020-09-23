//Functions

/*const name = "Specialist"

function toUpper(text) {
    const upperCased = text.toUpperCase();
    console.log(upperCased);
}

toUpper(name); */

/*const toUpper = () => {

} */

//String Concatenation

/*const name = "Christian";
const age = 17;

const combined = name + age;

console.log(combined);*/

//console.log(typeof combined); visualize datatype

//console.log(`Hello it's me, ${name}`);

//Math

/*const num1 = 100;
const num2 = 50;
let val;

//Simple math with numbers
val = num1 + num2;
val = num1 * num2;
val = num1 - num2;
val = num1 / num2;
val = num1 % num2;

// Math Object
val = Math.PI;
val = Math.E;
val = Math.round(2.4);
val = Math.ceil(2.4); //always round up
val = Math.floor(2.8); //always round down
val = Math.sqrt(64);
val = Math.abs(-3);
val = Math.pow(8, 2); //base first then exponent
val = Math.min(2, 33, 4, 1, 55, 6, 3, -2); //returns the smallest value
val = Math.max(2, 33, 4, 1, 55, 6, 3, -2); //returns the largest value
val = Math.random(); //gives a random decimal value less than 1
val = Math.random() * 20; //multiply that random decimal value by 20

val = Math.floor(Math.random() * 20 + 1); //gives a random whole number between 1 and 20


console.log(val); */

//Functions-Parameters and Arguments

function calculateBill(billAmount, taxRate = 0.13, tipRate = 0.15){
    console.log("Running Calculate Bill!");
    const total = billAmount + (billAmount * taxRate) + (billAmount * tipRate);
    return total;
}
//const wesTotal = 500;
//const wesTaxRate = 0.3;
//const myTotal = calculateBill(wesTotal, wesTaxRate);
const myTotal3 = calculateBill(20 + 20 + 30 + 20, 0.15);
const myBill4 = calculateBill(100, undefined, 0.2);
console.log(myBill4);

/*function sayHiTo(firstName) {
    return `Hello ${firstName}`;
}

const greeting = sayHiTo("Specialist");
console.log(greeting);*/

function doctorize(name) {
    return `Dr. ${name}`;
}

function yell(name = "Silly Goose"){
    return `HEY ${name.toUpperCase()}`;
}

