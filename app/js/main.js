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

// Input validation for number of people

const numOfPeople = document.querySelector('#person__input');
const warningText = document.querySelector('#text-warning');

numOfPeople.onkeyup = function () {
  if (numOfPeople.value === "0") {
    warningText.classList.add('warning');
    numOfPeople.classList.add('warning');
  } else {
    warningText.classList.remove('warning');
    numOfPeople.classList.remove('warning');
  }
}