/* eslint-disable camelcase */
/* eslint-disable no-console */

// ['car', 1, 5, 'js', 'node js', 'mysql', 'sql' ] : Use switch statement inside a map function and
// console each item by using switch statement.

// always use camel case
// reduce the code to just one case and a default case

const Array = ['car', 1, 5, 'js', 'node js', 'mysql', 'sql'];
// eslint-disable-next-line array-callback-return
Array.map((item, value) => {
    switch (value) {
        case 1:
            console.log(Array[0]);
            break;
        case 2:
            console.log(Array[1]);
            break;
        case 3:
            console.log(Array[2]);
            break;
        case 4:
            console.log(Array[3]);
            break;
        case 5:
            console.log(Array[4]);
            break;
        case 6:
            console.log(Array[5]);
            break;
        case 7:
            console.log(Array[6]);
            break;
        default:
            break;
    }
});
// [1, 2, 3, 4.5, 6] : Write a closure function to delete indexes 5 and 2 of this array.
console.log('\n');
function deletefunction() {
    const number = [1, 2, 3, 4.5, 6];
    number.forEach((item, value) => {
        if (value === 5 || value === 2) {
            const new_array = number.splice(value, 1);
            console.log('\n', new_array);
        }
    });
}
deletefunction();
// Use constructor method to console all elements of the passed array. (the array will be passed
// to the constructor method)
console.log('\n');
const ar = ['1', '2', '3'];
class Array_passed {
    constructor(array) {
        for (let i = 0; i <= array.length; i += 1) {
            this.array = array;
        }
        console.log(array);
    }
}
const array_var = new Array_passed(ar);
// Create a function that takes 2 arguments, 1st argument being any array of items,2nd being any one
// of the item name either in the passed array or not in the passed array,the function should delete
//  the passed item if it exists in the array, if it doesn't exist then the item should be inserted
//  into the array, finnally console the output.
console.log('\n');

// console the final array inside the fn
// make a copy of the original array inside the function, dont mutate the original array

const array_item = ['1', '2', '3', '4'];
function functiondelete(item1, item2) {
    for (let i = 0; i <= array_item.length - 1; i += 1) {
        if (item1 === array_item[i] || item2 === array_item[i]) {
            array_item.splice(i, 1);
            console.log('sds', array_item[i]);
        } else {
            array_item.push(item1);
            array_item.push(item2);
        }
    }
}
functiondelete(2, 5);
console.log(array_item);

// Create a self-invoking function to console you name.
(function () {
    console.log('\nArchana S Kumar');
})();
// {a:'one',b:'2', f:'5', c:'33', p:'do', q:'one'}:Using this object make an array consisting of all
// the keys of the given object in reverse order. (output should be ['q', 'p', 'c', 'f', 'b', 'a'])
console.log('\n');
const object_array = {
    a: 'one',
    b: '2',
    f: '5',
    c: '33',
    p: 'do',
    q: 'one',
};
// eslint-disable-next-line no-restricted-syntax, guard-for-in
for (const key in object_array) {
    const rev = key;
    console.log(rev);
}

// { data:[{a:'one',id:'22'},{a:'four',id:'7'},{a:'six',b:'2'},{a:'sixty',id:'24'},{a:'five',
// id:'212'}]} From the given object remove the data array item with id as '24'. (consider that
// the data arrays order will be different every time you get, so write code in such a way that
// given any object it will remove the item with id as 24 if it exists )
console.log('\n');

// this is the object { data:[{a:'one',id:'22'},{a:'four',id:'7'},{a:'six',b:'2'},{a:'sixty',id:'24'},{a:'five',
// id:'212'}]} to work with. here only array is there.

const data = [
    { a: 'one', id: '22' },
    { a: 'four', id: '7' },
    { a: 'six', b: '2' },
    { a: 'sixty', id: '24' },
    { a: 'five', id: '212' },
];
data.forEach((item, value) => {
    if (item.id === '24') {
        delete item.id;
    }
});
console.log(data);
// Given var string = "Javascript is the King of the web."
// a) Get the length of the string.
console.log('\n');
const string = 'Javascript is the King of the web.';
console.log(string.length);
// b) Print the 8th character of the string without using any function.

//  which is the  8th character?

console.log('\n');
const character = string.charAt(8);
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
const word1 = string.substring(0, 18);
const word2 = string.substring(18, string.length);
console.log(word1, 'new', word2);
// g) Get the words in string as an array.
console.log('\n');
console.log(string.split(' '));
// h) Extract and print the words "is the King" from string.
console.log('\n');

/* 
  use js for everything, dont count manually
 */
console.log(string.substring(11, 22));
// i) Get the count of occurrences of the strings "the" and "of" in string.

/* wrong - need separate count of each, also mention whose count it is*/

console.log('\n');
let count = 0;
if (string.includes('the') === true && string.includes('of') === true) {
    count += 1;
}
console.log(count);
// j) pad string with "*" and set the total length of the string as 30, displayed at right side.
console.log('\n');
const size_array = string.substring(0, 26);
console.log(size_array.padEnd(30, '*'));
