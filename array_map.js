// 1. Start with an array of numbers and create a new array with each number times 3.
//    For example, [1, 2, 3] becomes [3, 6, 9].

var numbers = [1, 2, 3];
var timesThree = [];

numbers.forEach(function(number) {
  timesThree.push(number * 3);
});

console.log(timesThree);

// 2. Start with an array of strings and create a new array with each string upcased.
//    For example, ["hello", "goodbye"] becomes ["HELLO", "GOODBYE"].

var words = ["hello", "goodbye"];
var capWords = [];
words.forEach( function (word) {
  capWords.push(word.toUpperCase());
});
console.log(capWords);

// 3. Start with an array of hashes and create a new array of string values from each hash's :name key.
//    For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes ["Alice", "Blane"].

var people = [{name: "Alice", age: 27}, {name: "Blane", age: 16}];
var names = [];

people.forEach( function(person) {
  names.push(person.name);
});

console.log(names);

// 4. Start with an array of numbers and create a new array with each number plus 7.
//    For example, [1, 2, 3] becomes [8, 9, 10].

var nums = [1, 2, 3];
var plusSevens = [];

nums.forEach( function(num) {
  plusSevens.push(num + 7);
});
console.log(plusSevens);

// 5. Start with an array of strings and create a new array with each string's length.
//    For example, ["hello", "goodbye"] becomes [5, 7].

var salutations = ["hello", "goodbye"];
var lengths = [];

salutations.forEach(function(sal) {
  lengths.push(sal.length);
});
console.log(lengths);

// 6. Start with an array of hashes and create a new array of number values from each hash's :age key.
//    For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes [27, 16].

var people = [
  { name: "Alice", age: 27 },
  { name: "Blane", age: 16 },
];
var ages = [];

people.forEach (function(person) {
  ages.push(person.age);
});

console.log(ages);

// 7. Start with an array of numbers and create a new array with each number divided by 2.
//    For example, [1, 2, 3] becomes [0.5, 1.0, 1.5].

var numbers = [1,2,3];
var splitInTwos = [];

numbers.forEach(function(number) {
  splitInTwos.push(number / 2.0);
});

console.log(splitInTwos);

// 8. Start with an array of strings and create a new array with each string's first letter only.
//    For example, ["hello", "goodbye"] becomes ["h", "g"].

var greetings = ["hello", "goodbye"];
var firstLetters = [];

greetings.forEach(function(greeting) {
  firstLetters.push(greeting[0]);
});

console.log(firstLetters);

// 9.  Start with an array of hashes and create a new array of number values from each hash's :age key times 2.
//    For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes [54, 32].

var students = [{name: "Alice", age: 27}, {name: "Blane", age: 16}];
var doubleAges = [];

students.forEach(function(student) {
  doubleAges.push(student.age * 2);
});

console.log(doubleAges);

// 10. Start with an array of numbers and create a new array with each number converted into a string.
//    For example, [1, 2, 3] becomes ["1", "2", "3"].

var nums = [1, 2, 3];
var stringNums = [];

nums.forEach(function(num) {
  stringNums.push(num.toString());
});

console.log(stringNums);