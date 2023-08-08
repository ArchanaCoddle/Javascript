// Create variables with different data types available in JS and 
// print their data types along with each variable name in the console. 
const num = 25;
const msg = 'hello';
const bool = true;
let udVariable;
const nullVariable = null;
const arr = [1, 2, 3];
const object = { id: 11, name: 'abc'};
console.log('num is a ', typeof num);
console.log('msg is a ', typeof msg);
console.log('bool is a ', typeof bool);
console.log('ud_variable is an ', typeof udVariable);
console.log('nullVariable is a ', typeof nullVariable);
console.log('arr is an ', typeof arr);
console.log('object is an ', typeof object);
// Create a concatenated string with the above variables using template literals and
//  without template literals. (separate each variable by space in the string)
const textNotemp = `${num} ${msg} ${bool} ${udVariable} ${nullVariable} ${arr} ${object.id} ${object.name}`;
const textTemp = `${num} ${msg} ${bool} ${udVariable} ${nullVariable} ${arr} ${object.id} ${object.name}`;
console.log('Without template literals - ', textNotemp);
console.log('With template literals - ', textTemp);
// Write a JS program to show an alert message on the loading of the website.
// window.alert('Hello welcome to this page');
