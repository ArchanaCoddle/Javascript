// Make a form with fields name, phone number, place, company name, pin code

// if any of the fields are empty on submitting it should show corresponding
//  error messages below all the required fields.

// pin code and mobile number fields should not be submitted with non-integer
//  values, if so, then show an error msg stating only numbers are allowed.

// The minimum length of the phone number should be 10, otherwise, show the
//  corresponding error msg below the mobile no. field.

// On submission of the form, store the details in the local storage and clear
//  the form. (it should stay on the same page don't refresh the page).

// Make a prepopulate button, which when clicked will populate the form with values
//  in the local storage if it exists, otherwise, the button will be disabled.

// Note: The page shouldn't refresh on submitting the form in any of the
//  questions and show error messages below the appropriate fields only.

//2. Create a button and div using JS,when clicked on the button your basic details should be  shown
//  in the div. The static HTML file should only contain the basic HTML structure, no div/buttons.
let cont = 0;
const submit = document.getElementById('submit');
submit.addEventListener('click', (event) => {
  event.preventDefault();
  const pername = document.getElementById('name').value;
  const number = document.getElementById('number').value;
  const place = document.getElementById('place').value;
  const company = document.getElementById('company').value;
  const pin = document.getElementById('pin').value;
  const submitForm = document.getElementById('submitForm');
  const pre = document.getElementById('pre');
  submitForm.reset();
  let tPin;
  let tNumber;
  document.getElementsByTagName('p').value = '';
  // eslint-disable-next-line no-restricted-globals
  if (!isNaN(number) || !isNaN(pin)) {
    tNumber = true;
    tPin = true;
  } else {
    tNumber = false;
    tPin = false;
  }
  if (pername.length === 0) {
    document.getElementById('nameError').innerHTML = 'Field is null';
  }
  if (number.length === 0) {
    document.getElementById('numberError').innerHTML = 'Field is null';
  }
  if (tNumber !== true) {
    document.getElementById('numberError').innerHTML = 'Only number is allowed';
  }
  if (number.length > 10 || number.length < 10) {
    document.getElementById('numberError').innerHTML = ' length is not correct';
  }
  if (place.length === 0) {
    document.getElementById('placeError').innerHTML = 'Field is null';
  }
  if (company.length === 0) {
    document.getElementById('companyError').innerHTML = 'Field is null';
  }
  if (pin.length === 0) {
    document.getElementById('pinError').innerHTML = 'Field is null';
  }
  if (tPin !== true) {
    document.getElementById('pinError').innerHTML = 'Only number is allowed';
  }
  if (pername !== '' && number !== '' && tNumber === true && number.length === 10 && place !== '' && company !== '' && tPin === true) {
    alert('sucessful saved your details');
    const paragraphs = document.getElementsByTagName('p');
    for (let i = 0; i < paragraphs.length; i += 1) {
      paragraphs[i].textContent = ' ';
    }
  }

  localStorage.setItem('name', pername);
  localStorage.setItem('number', number);
  localStorage.setItem('place', place);
  localStorage.setItem('company', company);
  localStorage.setItem('pin', pin);
  console.log(localStorage);
  if (localStorage.getItem('name') === '' && localStorage.getItem('number') === '' && localStorage.getItem('place') === ''
  && localStorage.getItem('company') === '' && localStorage.getItem('pin') === '') {
    console.log('null');
    document.getElementById('pre').disabled = true;
  } else {
    document.getElementById('pre').disabled = false;
  }

  function buttonCreation() {
    let btn;
    if (cont === 0) {
      btn = document.createElement('button');
      btn.innerHTML = 'Show details';
      document.body.appendChild(btn);
      cont += 1;
    }
    btn.addEventListener('click', () => {
      const divDetails = document.createElement('div');
      divDetails.innerHTML = `Name =  ${localStorage.getItem('name')} <br> number =  ${localStorage.getItem('number')} <br>
    place =  ${localStorage.getItem('place')}<br>
    company =  ${localStorage.getItem('company')}<br>
    pin =  ${localStorage.getItem('pin')}`;
      document.body.appendChild(divDetails);
    });
  }
  buttonCreation();

  pre.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('bbbbb', localStorage);
    if (localStorage.getItem('name') === '' && localStorage.getItem('number') === '' && localStorage.getItem('place') === ''
      && localStorage.getItem('company') === '' && localStorage.getItem('pin') === '') {
      console.log('null');
    } else {
      document.getElementById('name').value = localStorage.getItem('name');
      console.log(localStorage.getItem('name'));
      document.getElementById('number').value = localStorage.getItem('number');
      document.getElementById('place').value = localStorage.getItem('place');
      document.getElementById('company').value = localStorage.getItem('company');
      document.getElementById('pin').value = localStorage.getItem('pin');
    }
  });
});

// 3.Create a private variable and console it by accessing it.
class Increment {
  privateVariable = 0;

  increment() {
    this.privateVariable += 1;
  }

  get value() {
    return this.privateVariable;
  }
}
const inc = new Increment();
inc.increment();
console.log(inc.value, 'is incremented');

// 4.Create a static variable and console it by accessing it.

function incrementByStatic() {
  let staticVariable = 0;
  staticVariable += 1;
  console.log(staticVariable, 'static is incremented');
}
incrementByStatic();
