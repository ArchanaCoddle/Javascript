let count = 0;
let tie = 0;
let end = true;
let clicked = [];
const Cell1 = document.getElementById('Cell1');
const Cell2 = document.getElementById('Cell2');
const Cell3 = document.getElementById('Cell3');
const Cell4 = document.getElementById('Cell4');
const Cell5 = document.getElementById('Cell5');
const Cell6 = document.getElementById('Cell6');
const Cell7 = document.getElementById('Cell7');
const Cell8 = document.getElementById('Cell8');
const Cell9 = document.getElementById('Cell9');
function drawCondition(ties) {
  if (ties === 0) {
    if ((Cell1.value === 'X' || Cell1.value === 'O') && (Cell2.value === 'X' || Cell2.value === 'O')
    && (Cell3.value === 'X' || Cell3.value === 'O') && (Cell4.value === 'X' || Cell4.value === 'O')
    && (Cell5.value === 'X' || Cell5.value === 'O') && (Cell6.value === 'X' || Cell6.value === 'O')
    && (Cell7.value === 'X' || Cell7.value === 'O') && (Cell8.value === 'X' || Cell8.value === 'O')
    && (Cell9.value === 'X' || Cell9.value === 'O')) {
      document.getElementById('Winner').innerHTML = 'Match Tie';
    }
  }
}
function printValueX(valueId) {
  document.getElementById(valueId).innerHTML = 'X';
  document.getElementById(valueId).value = 'X';
  clicked = valueId;
  if ((Cell1.value === 'X' && Cell2.value === 'X' && Cell3.value === 'X')
  || (Cell2.value === 'X' && Cell5.value === 'X' && Cell8.value === 'X')
  || (Cell7.value === 'X' && Cell8.value === 'X' && Cell9.value === 'X')
  || (Cell1.value === 'X' && Cell4.value === 'X' && Cell7.value === 'X')
  || (Cell4.value === 'X' && Cell5.value === 'X' && Cell6.value === 'X')
  || (Cell3.value === 'X' && Cell6.value === 'X' && Cell9.value === 'X')
  || (Cell3.value === 'X' && Cell5.value === 'X' && Cell7.value === 'X')
  || (Cell1.value === 'X' && Cell5.value === 'X' && Cell9.value === 'X')) {
    tie += 1;
    document.getElementById('Winner').innerHTML = 'X wins';
    end = false;
  } else {
    drawCondition(tie);
  }
}
function printValueO(valueId) {
  document.getElementById(valueId).innerHTML = 'O';
  document.getElementById(valueId).value = 'O';
  clicked = valueId;
  if ((Cell1.value === 'O' && Cell2.value === 'O' && Cell3.value === 'O')
  || (Cell2.value === 'O' && Cell5.value === 'O' && Cell8.value === 'O')
  || (Cell7.value === 'O' && Cell8.value === 'O' && Cell9.value === 'O')
  || (Cell1.value === 'O' && Cell4.value === 'O' && Cell7.value === 'O')
  || (Cell4.value === 'O' && Cell5.value === 'O' && Cell6.value === 'O')
  || (Cell3.value === 'O' && Cell6.value === 'O' && Cell9.value === 'O')
  || (Cell3.value === 'O' && Cell5.value === 'O' && Cell7.value === 'O')
  || (Cell1.value === 'O' && Cell5.value === 'O' && Cell9.value === 'O')) {
    tie += 1;
    document.getElementById('Winner').innerHTML = 'O wins';
    end = false;
  } else {
    drawCondition(tie);
  }
}
document.addEventListener('click', (e) => {
  if (end === true) {
    const valueId = e.target.id;
    if (clicked !== valueId) {
      count += 1;
      const cm = count % 2;
      if (cm === 0) {
        printValueX(valueId);
      } else if (cm === 1) {
        printValueO(valueId);
      }
    }
  }
});
const resetButton = document.getElementById('resetButton');
resetButton.addEventListener('click', () => {
  window.location.reload();
});
