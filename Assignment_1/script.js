//Add questions as comments above every answer.
//check any data type is missing
//What is the difference between var and let?why have you used both??
//Use camel case for variable names.
// Check the variable declarations in JavaScript and select the one that is appropriate for your variables.

var num = 25;
var msg = "hello";
var bool = true;
var ud_variable;
var null_variable = null;
let arr = [1, 2, 3];
let object = { id: 11, name: "abc" };
console.log("num is a " + typeof num);
console.log("msg is a " + typeof msg);
console.log("bool is a " + typeof bool);
console.log("ud_variable is an " + typeof ud_variable);
console.log("null_variable is a " + typeof null_variable);
console.log("arr is an " + typeof arr);
console.log("object is an " + typeof object);

let text_notemp =
  num +
  " " +
  msg +
  " " +
  bool +
  " " +
  ud_variable +
  " " +
  null_variable +
  " " +
  arr +
  " " +
  object;
let text_temp = `${num} ${msg} ${bool} ${ud_variable} ${null_variable} ${arr} ${object}`;
console.log("Without template literals - " + text_notemp);
console.log("With template literals - " + text_temp);

alert("Hello welcome to this page");
