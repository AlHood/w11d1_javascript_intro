// Section 1

// What types are these?

/* 1.1 */ 1; //number
/* 1.2 */ "cat"; //string
/* 1.3 */ true; //boolean
/* 1.4 */ []; //array
/* 1.5 */ {}; // hashtable / associative array?
/* 1.6 */ 1.1; // still a number
/* 1.7 */ var myVariable; // variable?


// Section 2

// What is the truthiness/falsiness values of the following values?

/* 2.1 */ 1; // true
/* 2.2 */ "cat"; //true
/* 2.3 */ true; // true
/* 2.4 */ NaN; // false
/* 2.5 */ []; // false
/* 2.6 */ {}; //  false
/* 2.7 */ undefined; //false
/* 2.8 */ ""; // false
/* 2.9 */ 0; // false


// Section 3

// Using examples that are different from above...

// 3.1 Assign a variable that is a number
var exampleVariable = 12;
// 3.2 Assign a variable that is a string
var exampleVariable = "a string of sorts";
// 3.3 Assign a variable that is a boolean
var exampleVariable = false;
// 3.4 Assign a variable that is an object
var exampleVariable = {name: "Alastair", jam: "strawberry"}


// Section 4

// 4.1 Write a statement that writes "hello" to the console if it's true and "bye" if it is false
if(greeting === false){
  console.log("hello!")}else{console.log("bye")}
}

// Section 5

var animals = ["raccoon","hedgehog","mouse","gerbil"];

// 5.1. Assign the first element to a variable
var exampleVariable = animals[0];
// 5.2. Assign the last element to a variable
var exampleVariable = animals[3];
// 5.3. Assign the length of an array to a variable
var exampleVariable = animals.length;
// 5.4. Add an item to the end of the array
animals.push("common pipistrelle");
// 5.5. Add an item to the start of the array
animals.unshift("soprano pipistrelle");
// 5.6. Assign the index of hedgehog to a variable
var exampleVariable = animals.indexOf("hedgehog");

// Section 6

// 6.1 Create an array of 5 vegetables
vegetables = ["tomato", "peanut", "celery", "cauliflower", "onion"]
// 6.2 Loop over the array and write to the console using a "while"
i = 0;
while(i < (vegetables.length)){
  console.log(vegetables[i]);
  i++;
}
// 6.3 Loop again using a "for" with a counter
for(var i = 0; i < vegetables.length; i++){
console.log(vegetables[i]);}

// 6.4 Loop again using a "for of"
for(var vegetable of vegetables){
  console.log(vegetable);
}



// Section 7

var accounts = [
  { name: 'jay',
    amount: 125.50,
    type: 'personal'
  },
  { name: 'val',
    amount: 55125.10,
    type: 'business'
  },
  { name: 'marc',
    amount: 400.00,
    type: 'personal'
  },
  { name: 'keith',
    amount: 220.25,
    type: 'business'
  },
  { name: 'rick',
    amount: 1.00,
    type: 'personal'
  },
];

// Write functions for the following tasks!
// 7.1 Calculate the total cash in accounts
var total = 0;
for( var account in accounts){
  total += accounts[account].amount;}

// 7.2 Find the amount of money in the account with the largest balance
var highest = 0
for( var account in accounts){
  if (accounts[account].amount > highest) {
    highest = accounts[account].amount;

}}

// 7.3 Find the name of the account with the smallest balance
var lowest = 999999999999999999999999999999999999999;
var name = "";
for( var account in accounts){
  if (accounts[account].amount < lowest) {
    lowest = accounts[account].amount;
name = accounts.[account].name;
}}
console.log(name);
// 7.4 Calculate the average bank account value
var total = 0
for( var account in accounts){
  total += accounts[account].amount;}
  return (total / accounts.length);


// 7.5 Find the value of marcs bank account

for( var account in accounts){
if(accounts[account].name === 'marc'){
  return accounts[account].amount;
}

}
// 7.6 Find the holder of the largest bank account
var highest = 0;
var name = "";
for( var account in accounts){
  if (accounts[account].amount > highest) {
    highest = accounts[account].amount;
    name = accounts[account].name;
}}
console.log(name);

// 7.7 Calculate the total cash in business accounts
var total = 0;
for( var account in accounts){
  if (accounts[account].type === 'business') {
  total += accounts[account].amount;}}
console.log(total);

// 7.8 Find the largest personal account owner
var highest = 0;
var name = "";
for( var account in accounts){
  if (accounts[account].amount > highest) {
    if (accounts[account].type === 'personal'){
    highest = accounts[account].amount;
    name = accounts[account].name;
}}}
console.log(name);

// Section 8

// Assign a variable myPerson to a hash, giving them a name, height, favourite food and an eat method

var myPerson = {name: "Keir", height: "Looming", favourite_food: "cheese", eat_method: eat()}


