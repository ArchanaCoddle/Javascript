//Add questions as comments above every answer.
//check any data type is missing
//What is the difference between var and let?why have you used both??
//Use camel case for variable names.
// Check the variable declarations in JavaScript and select the one that
//  is appropriate for your variables.

//1. Create variables with different data types available in JS and
// print their data types along with each variable name in the console.
const num = 25;
const msg = 'hello';
const bool = true;
let udVariable;
const nullVariable = null;
const arr = [1, 2, 3];
const object = { id: 11, name: 'abc' };
const date = new Date('2023-08-11');
const bigInteger = BigInt('11223344556677889900');
const sym = Symbol('foo');
console.log('num is a ', typeof num);
console.log('msg is a ', typeof msg);
console.log('bool is a ', typeof bool);
console.log('udVariable is an ', typeof udVariable);
console.log('nullVariable is a ', typeof nullVariable);
console.log('arr is an ', typeof arr);
console.log('object is an ', typeof object);
console.log('date is an ', typeof date);
console.log('bigInteger is an ', typeof bigInteger);
console.log('sym is an ', typeof sym);
//2. Create a concatenated string with the above variables using template literals and
//  without template literals. (separate each variable by space in the string)
const textNotemp = `${num} ${msg} ${bool} ${udVariable} ${nullVariable} ${arr} ${object.id} ${object.name} ${date} ${bigInteger} ${sym}`;
const textTemp = `${num} ${msg} ${bool} ${udVariable} ${nullVariable} ${arr} ${object.id} ${object.name} ${date} ${bigInteger} ${sym}`;
console.log('Without template literals - ', textNotemp);
console.log('With template literals - ', textTemp);
//3. Write a JS program to show an alert message on the loading of the website.
alert('Hello welcome to this page');
