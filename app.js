//else if

/*const dice1 = 6;
const dice2 = 3;

if(dice1 === 6 && dice2 === 6){
    console.log("You rolled a double");
} else{
    console.log("Stay in jail");
}*/

//objects

/*const user = {
    name: "Edwin",
    age: 24,
    married: false,
    purchases: ["phone", "car", "laptop"],

    sayName: function() {
        console.log(this.name);
    }
};

user.sayName();

function saymyAge() {
    console.log(`My age is ${this}`);
}

saymyAge();*/

//switches

/*const color = 'yellow',

switch(color){
    case 'red':
        console.log('Color is red');
        break;
    case 'blue':
        console.log('Color is blue');
        break;
    default:
        console.log('Color is not red or blue');
        break;
}

let day;

switch(new Date().getDay()){
    case 0:
        day = 'Sunday';
        break;
    case 1:
        day = 'Monday';
        break;
    case 2:
        day = 'Tuesday';
        break;
    case 3:
        day = 'Wednesday';
        break;
    case 4:
        day = 'Thursday';
        break;
    case 5:
        day = 'Friday';
        break;
    case 6:
        day = 'Saturday';
        break;
}

console.log(`Today is ${day}`);*/

//Traversy Arrays

//Create some arrays
/*const numbers = [43, 56, 33, 23, 44, 36, 5];
const numbers2 = new Array(22,45,33,76,54);
const fruit = ['Apple', 'Banana', 'Orange', 'Pear'];
const mixed = [22, 'Hello', true, undefined, null, {a:1, b:1}, new Date()];

let val;

//Get array length
val = numbers.length;
//Check if is array
val = Array.isArray(numbers);
//Get single value
val = numbers[3];
val = numbers[0];
//Insert into array
numbers[2] = 100;
//Find index of value
val = numbers.indexOf(36);

//mutating arrays
//add on to the end of array
numbers.push(250);
//add on to front
numbers.unshift(120);
//Take off from end
numbers.pop();
//Take off from front
numbers.shift();
//Splice values
numbers.splice(1, 3);
//Reverse
numbers.reverse();

//Concatenate array
val = numbers.concat(numbers2);

//Sorting arrays
val = fruit.sort();
val = numbers.sort();

//Use the "compare function"
val = numbers.sort(function(x, y){
    return x - y;
});

//Reverse sort
val = numbers.sort(function(x, y){
    return y - x;
});

//Find
function over50(num){
    return num > 50;
}

val = numbers.find(over50);

console.log(numbers);
console.log(val);*/