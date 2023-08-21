/* eslint-disable no-unused-vars */

// 1.Write a function to
//a. Calculate the height of the end user's browser screen
const height = window.innerHeight;
console.log(height);
// b.To console the name of the web host
const host = window.location.hostname;
console.log(host);
// c.To show a warning message if there is no https protocol used in the visited website.
if (window.location.protocol === 'https:') {
  console.warn('http is not used');
} else {
  console.warn('https is uesed');
}
// d.To show an alert message after 10sec while the page is refreshed.
function alertFunction() {
  window.alert('the message is delayed after 10 sec');
}
setTimeout(alertFunction(), 10000);

// 2. Store your basic details in local storage of the browser every time the page loads,
//  then console them and finally delete them after 1 minute of the page load.
const nameUser = 'Archana';
const age = '23';
const company = 'coddle';
localStorage.setItem('name', nameUser);
localStorage.setItem('age', age);
localStorage.setItem('company', company);
console.log(localStorage);
function removeData() {
  localStorage.removeItem('name');
  localStorage.removeItem('age');
  localStorage.removeItem('company');
  console.log(localStorage);
}
setTimeout(removeData, 60000);
//3. Create a form and submit button, on click of the button store your basic details
//  from the form in the cookies.
const formSubmit = document.getElementById('formSubmit');
let pName = document.getElementById('pName');
let pAge = document.getElementById('pAge');
let pCompany = document.getElementById('pCompany');
formSubmit.addEventListener('click', () => {
  pName = pName.value;
  pAge = pAge.value;
  pCompany = pCompany.value;
  console.log(pName, pAge, pCompany);
  document.cookie = `name=${pName}; expires=Wed, 9 aug 2023 24:00:00 UTC; path=/`;
  document.cookie = `age=${pAge}; expires=Wed, 9 aug 2023 24:00:00 UTC; path=/`;
  document.cookie = `company=${pCompany}; expires=Wed, 9 aug 2023 24:00:00 UTC; path=/`;
});
// 4.Redirect to the homepage of google from the console.
// const url = 'https://www.google.com';
// window.location.href = url;

//5. Create a div with background color red, create buttons
// to hide the div
// to change the background color of the div
// to show your basic details on the div, the details should hide/show, on the click.
const box1 = document.getElementById('box1');
const para = document.getElementById('para');
// eslint-disable-next-line no-unused-vars
function hide() {
  if (box1.style.display !== 'none') {
    box1.style.display = 'none';
  } else {
    box1.style.display = 'block';
  }
}
function color() {
  box1.style.backgroundColor = 'black';
}
function contentHide() {
  if (para.style.display !== 'none') {
    para.style.display = 'none';
  } else {
    para.style.display = 'block';
  }
}

//6. Create a select box with numbers 1 to 10,  when selected 9, you should change the selection
//  to 10 and show a message that "9 is fully occupied please select another number", when
//  selected any number other than 9 it should show a message as "you selected 'particular
//   number' " in a div, on hovering the div it should change the background color of the
//  div into a highlighting shade, while the mouse pointer leaves the message area the
//  background color should go back to as before
// (don't use CSS to attain the hovering functionality)
const colorChange = document.getElementById('colorChange');
colorChange.addEventListener('mouseover', () => {
  colorChange.style.backgroundColor = 'pink';
});
colorChange.addEventListener('mouseout', () => {
  colorChange.style.backgroundColor = 'aqua';
});

const selector = document.getElementById('selector');
selector.addEventListener('change', () => {
  // eslint-disable-next-line no-unused-expressions
  if (selector.value === '9') {
    document.getElementById('colorChange').innerHTML = ` ${selector.value} is fully occupied please select another number`;
    document.getElementById('selector').value = '10';
  } else {
    document.getElementById('colorChange').innerHTML = `You selected: ${selector.value}`;
  }
});
//7. Consider an array with names of 10 programming languages, make 10 buttons by
//  iterating this array, when clicked on each button the name of the programming
//   language should be shown in a corresponding div.
const language = ['HTML', 'CSS', 'JavaScript', 'JQuery', 'Java', 'c programming', 'C++', 'python', 'SQl', '.NET'];
language.forEach((element) => {
  const btn = document.createElement('button');
  btn.innerHTML = element;
  document.getElementById('selectingLanguage').appendChild(btn);
  btn.addEventListener('click', () => {
    document.getElementById('lang').innerHTML = element;
  });
});
// 8. Create a form with a text field which when submitted, will change the tab title
//  to whatever is entered, limit the field to 50 characters, otherwise show an error
//   message, and stay on the same page when submitted(it shouldn't refresh);

const title = document.getElementById('title');
const tBtn = document.getElementById('submitBtn');
tBtn.addEventListener('click', () => {
  const newTitle = title.value;
  console.log(newTitle);
  if (newTitle.length >= 50) {
    document.getElementById('error').innerHTML = 'Title must be less than 50 characters.';
  } else {
    document.title = newTitle;
  }
});

// 9. When the control+enter key is pressed show an alert message.
document.addEventListener('keydown', (e) => {
  if (e.ctrlKey && e.key === 'Enter') {
    alert('Control + Enter key is pressed!');
  }
});
