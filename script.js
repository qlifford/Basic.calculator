
let add = document.getElementById('addBtn').textContent;
let sub = document.getElementById('subBtn').textContent;
let mult = document.getElementById('multBtn').textContent;
let div = document.getElementById('divBtn').textContent;
let res = document.getElementById('res');
let num1Input = document.getElementById('num1');
let num2Input = document.getElementById('num2');
let buttons = document.querySelectorAll('.btn');



function addListeners() {
  buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const num1 = parseFloat(num1Input.value);
      const num2 = parseFloat(num2Input.value);
      if (num1Input.value === '' || num2Input.value === '') {
        alert('All fields must be filled!');
        // res.textContent = 'All fields must be filled!';
        return;
      }
      if (isNaN(num1) || isNaN(num2)) {
        alert('Please enter a number!');
        // res.textContent = 'Please enter a number!';
        return;
      }

      let answ;
      const op = button.textContent;
      if (op === add) {
        answ = num1 + num2;
      } else if (op === sub) {
        answ = num1 - num2;
      } else if (op === mult) {
        answ = num1 * num2;
      } else if (op === div) {
        if (num2 === 0) {
          // res.textContent = 'Cannot divide by zero!';
          alert('Cannot divide by zero!');
          return;
        }
        answ = num1 / num2;
      }
      res.textContent = `${answ}`;
      res.style.color = 'black';
      res.style.fontSize = '50px';
      res.style.background = 'grey';
      res.style.padding = '30px';
      res.style.borderRadius = '10px';
      num1Input.value = '';
      num2Input.value = '';
      num2Input.focus();
      num1Input.focus();
    });
  });
}
addListeners();

