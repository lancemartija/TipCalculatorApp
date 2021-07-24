// Button styles when clicked

const button = document.querySelectorAll(".tip-buttons__btn");
let active = false;

if (button) {
  button.forEach((btn1, key) => {
    btn1.addEventListener('click', () => {
      btn1.classList.toggle('active');
      button.forEach((btn2, keys) => {
        if (key !== keys) {
          btn2.classList.remove('active');
        }
      })
    })
  })
}

// Input validation for number of people and bill amount

const billAmount = document.querySelector('#bill__input');
const textWarning1 = document.querySelector('#text-warning-1');
const numOfPeople = document.querySelector('#num-of-ppl__input');
const textWarning2 = document.querySelector('#text-warning-2');

const isNumeric = (value) => {
  return !isNaN(parseFloat(value)) && !isNaN(value);
  // return /^\d+$/.test(value);
}

const inputValidation = (element, textElement) => {
  if (element.value === "") {
    textElement.classList.remove('warning');
    element.classList.remove('warning');
  } else if (isNumeric(element.value)) {
    if (Number(element.value) === 0) {
      textElement.innerHTML = 'Can\'t be zero';
      textElement.classList.add('warning');
      element.classList.add('warning');
    } else {
      textElement.classList.remove('warning');
      element.classList.remove('warning');
    }
  } else {
    textElement.innerHTML = 'Should be 1 or higher';
    textElement.classList.add('warning');
    element.classList.add('warning');
  }
}

billAmount.onkeyup = () => {
  inputValidation(billAmount, textWarning1);
}

numOfPeople.onkeyup = () => {
  inputValidation(numOfPeople, textWarning2);
}