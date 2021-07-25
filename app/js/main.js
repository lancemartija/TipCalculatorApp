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

// Input validation and reset functionality

const billAmount = document.querySelector('#bill__input');
const textWarning1 = document.querySelector('#text-warning-1');
const numOfPeople = document.querySelector('#num-of-ppl__input');
const textWarning2 = document.querySelector('#text-warning-2');
const resetButton = document.querySelector('#btn-6');
let isResetBtnDisabled = true;

const isNumeric = (value) => {
  return !isNaN(parseFloat(value)) && !isNaN(value);
}

const inputValidation = async (element, textElement) => {
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
    textElement.innerHTML = 'Must be a number';
    textElement.classList.add('warning');
    element.classList.add('warning');
  }
}

const hasValue = async (element1, element2) => {
  if (element1.value === "" || element2.value === "" || !isNumeric(element1.value) || !isNumeric(element2.value)) {
    resetButton.classList.add('disabled');
  } else {
    resetButton.classList.remove('disabled');
    resetButton.onclick = () => {
      element1.value = null;
      element2.value = null;
      resetButton.classList.add('disabled');
    }
  }
}

billAmount.onkeyup = () => {
  inputValidation(billAmount, textWarning1);
  hasValue(numOfPeople, billAmount);
}

numOfPeople.onkeyup = () => {
  inputValidation(numOfPeople, textWarning2);
  hasValue(numOfPeople, billAmount);
}