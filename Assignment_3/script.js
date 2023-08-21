// ['car', 1, 5, 'js', 'node js', 'mysql', 'sql' ] : Use switch statement inside a map function and
// console each item by using switch statement.

// always use camel case
// reduce the code to just one case and a default case

const Array = ['car', 1, 5, 'js', 'node js', 'mysql', 'sql'];
for (let i = 0; i < Array.length - 1; i += 1) {
  // eslint-disable-next-line array-callback-return
  Array.map((item, value) => {
    switch (value) {
      case i:
        console.log(Array[i]);
        break;
      default:
        break;
    }
  });
}
// [1, 2, 3, 4.5, 6] : Write a closure function to delete indexes 5 and 2 of this array.
console.log('\n');
function deletefunction() {
  const number = [1, 2, 3, 4.5, 6];
  number.forEach((item, value) => {
    if (value === 5 || value === 2) {
      const newArray = number.splice(value, 1);
      console.log('\n', newArray);
    }
  });
}
deletefunction();
// Use constructor method to console all elements of the passed array. (the array will be passed
// to the constructor method)
console.log('\n');
const ar = ['1', '2', '3'];
class ArrayPassed {
  constructor(array) {
    for (let i = 0; i <= array.length; i += 1) {
      this.array = array;
    }
    console.log(array);
  }
}
const arrayVar = new ArrayPassed(ar);
// Create a function that takes 2 arguments, 1st argument being any array of items,2nd being any one
// of the item name either in the passed array or not in the passed array,the function should delete
//  the passed item if it exists in the array, if it doesn't exist then the item should be inserted
//  into the array, finnally console the output.
console.log('\n');

// console the final array inside the fn
// make a copy of the original array inside the function, dont mutate the original array

const arrayItem = ['1', '2', '3', '4'];
// let copyArray;
function functiondelete(item1, item2) {
  for (let i = 0; i <= arrayItem.length - 1; i += 1) {
    let copyArray = arrayItem;
    console.log(copyArray);
    if (item1 === copyArray[i] || item2 === copyArray[i]) {
      copyArray = copyArray.splice(i, 1);
      console.log('nhug', copyArray);
    }
    // else {
    //   copyArray.unshift(item1);
    //   copyArray.unshift(item2);
    //   console.log(copyArray);
    // }
  }
}
functiondelete(2, 5);

// Create a self-invoking function to console you name.
(function () { console.log('\nArchana S Kumar'); }());

// {a:'one',b:'2', f:'5', c:'33', p:'do', q:'one'}:Using this object make an array consisting of all
// the keys of the given object in reverse order. (output should be ['q', 'p', 'c', 'f', 'b', 'a'])
console.log('\n');
const objectArray = {
  a: 'one',
  b: '2',
  f: '5',
  c: '33',
  p: 'do',
  q: 'one',
};
// eslint-disable-next-line no-restricted-syntax, guard-for-in
for (const key in objectArray) {
  const rev = key;
  console.log(rev);
}

// { data:[{a:'one',id:'22'},{a:'four',id:'7'},{a:'six',b:'2'},{a:'sixty',id:'24'},{a:'five',
// id:'212'}]} From the given object remove the data array item with id as '24'. (consider that
// the data arrays order will be different every time you get, so write code in such a way that
// given any object it will remove the item with id as 24 if it exists )
console.log('\n');

// this is the object { data:[{a:'one',id:'22'},{a:'four',id:'7'},{a:'six',b:'2'},
// {a:'sixty',id:'24'},{a:'five', id:'212'}]} to work with. here only array is there.

const dataArray = { data: [{ a: 'one', id: '22' }, { a: 'four', id: '7' }, { a: 'six', b: '2' }, { a: 'sixty', id: '24' }, { a: 'five', id: '212' }] };
const temp = '24';
dataArray.data = dataArray.data.filter((item) => item.id !== temp);
console.log(dataArray);

// Given var string = "Javascript is the King of the web."console.log('\n');
console.log('\n');
const string = 'Javascript is the King of the web.';
console.log(string.length);

// b) Print the 8th character of the string without using any function.

//  which is the  8th character?

console.log('\n');
const character = string.charAt(7);
console.log(character);
// c) Execute the above code from browser console.

// d) Get the position of the word "King" in string.
console.log('\n');
console.log(string.indexOf('King'));
// e) Replace "King" with "Emperor".
console.log('\n');
console.log(string.replace('King', 'Emperor'));

// f) Insert the string "new” before the word "King".
console.log('\n');

/*
how did u get the indexes, use js for everything, dont count manually
 */
const index1 = string.indexOf('K');
const index2 = string.indexOf('e');
const word1 = string.substring(0, index2 + 1);
const word2 = string.substring(index1, string.length);
console.log(word1);
console.log(word2);
console.log(word1, ' new', word2);
// g) Get the words in string as an array.
console.log('\n');
console.log(string.split(' '));
// h) Extract and print the words "is the King" from string.
console.log('\n');

/*
  use js for everything, dont count manually
 */
const strt = string.indexOf('is');
const end = string.indexOf('g');
console.log(string.substring(strt, end + 1));

// i) Get the count of occurrences of the strings "the" and "of" in string.

/* wrong - need separate count of each, also mention whose count it is */

console.log('\n');
let countT = 0;
let countO = 0;
if (string.includes('the') === true) {
  countT += 1;
}
if (string.includes('of') === true) {
  countO += 1;
}
console.log('count of "the" = ', countT);
console.log('count of "Of" = ', countO);

// j) pad string with "*" and set the total length of the string as 30, displayed at right side.
console.log('\n');
const sizeArray = string.substring(0, 26);
console.log(sizeArray.padEnd(30, '*'));
