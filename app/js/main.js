// Input Fields
const billInputField = document.querySelector('#input__bill');
const peopleInputField = document.querySelector('#num-of-ppl__input');
const customInputField = document.querySelector('#custom__input');

// Buttons
const tipButtons = document.querySelectorAll('#tip-btn');
const resetButton = document.querySelector('#reset-btn');

// Text Labels
const tipAmountLabel = document.querySelector('#tip-amount');
const totalAmountLabel = document.querySelector('#total');
const billWarningLabel = document.querySelector('#text-warning-1');
const peopleWarningLabel = document.querySelector('#text-warning-2');

// Reset Values Function
const resetAllValues = (inputField, textLabel) => {

}

// Function that returns TRUE if value is Numeric
const isNumeric = (value) => {
  return !isNaN(parseFloat(value)) && !isNaN(value);
}

// Round Up Numbers to 2
// roundUptTo2(billInputField.value);
// roundUpTo2(peopleInputField.value);
const roundUpTo2 = (value) => {
  return Math.round((Number(value) * 100)) / 100;
}

/*
- add reset values
- add functions that add and removes classes
- loop through buttons and assign tip values to each keys
*/











// const button = document.querySelectorAll(".tip-buttons__btn");
// const customInput = document.querySelector('#custom__input');
// const billAmount = document.querySelector('#bill__input');
// const textWarning1 = document.querySelector('#text-warning-1');
// const numOfPeople = document.querySelector('#num-of-ppl__input');
// const textWarning2 = document.querySelector('#text-warning-2');
// const resetButton = document.querySelector('#reset-btn');
// let isResetBtnDisabled = true;
// const tipAmount = document.querySelector('#tip-amount');
// const totalAmount = document.querySelector('#total');
// let finalBillValue = 0;
// let finalTotalValue = 0;
// let isActive = false;
// let tip = 0;
// let elementVal = 0;

// const displayBillAmount = () => {
//   if (billAmount.value === '' && numOfPeople.value === '') {
//     tipAmount.innerHTML = '$0.00';
//     totalAmount.innerHTML = '$0.00';
//   } else {
//     finalBillValue = Math.round(((Number(billAmount.value) * tip) * 100)) / 100;
//     tipAmount.innerHTML = `$${finalBillValue}`;
//   }
// }

// const displayTotalAmount = () => {
//   if (billAmount.value === '' && numOfPeople.value === '') {
//     tipAmount.innerHTML = '$0.00';
//     totalAmount.innerHTML = '$0.00';
//   } else {
//     finalTotalValue = Math.round(((Number(numOfPeople.value) * finalBillValue) * 100)) / 100;
//     totalAmount.innerHTML = `$${finalTotalValue}`;
//   }
// }

// if (button) {
//   button.forEach((btn1, key) => {
//     btn1.addEventListener('click', () => {
//       isActive = true;
//       btn1.classList.toggle('active');
//       resetButton.onclick = () => {
//         resetAll();
//       }
//       if (key === 0) {
//         resetButton.classList.remove('disabled');
//         tip = .05;
//         displayBillAmount();
//         displayTotalAmount();
//         customInput.value = null;
//       } else if (key === 1) {
//         resetButton.classList.remove('disabled');
//         tip = .1;
//         displayBillAmount();
//         displayTotalAmount();
//         customInput.value = null;
//       } else if (key === 2) {
//         resetButton.classList.remove('disabled');
//         tip = .15;
//         displayBillAmount();
//         displayTotalAmount();
//         customInput.value = null;
//       } else if (key === 3) {
//         resetButton.classList.remove('disabled');
//         tip = .2;
//         displayBillAmount();
//         displayTotalAmount();
//         customInput.value = null;
//       } else if (key === 4) {
//         resetButton.classList.remove('disabled');
//         tip = .25;
//         displayBillAmount();
//         displayTotalAmount();
//         customInput.value = null;
//       } else if (key === 5) {
//         isActive = true;
//         customInput.onkeyup = () => {
//           tip = Number(customInput.value) / 100;
//           resetButton.classList.remove('disabled');
//           if (customInput.value === '') {
//             isActive = false;
//             customInput.classList.remove('warning');
//             if (billAmount.value === '') {
//               resetButton.classList.add('disabled');
//             }
//           } else if (!isNumeric(customInput.value)) {
//             customInput.classList.add('warning');
//           } else {
//             customInput.classList.remove('warning');
//           }
//           finalBillValue = Math.round(((elementVal * tip) * 100)) / 100;
//           tipAmount.innerHTML = `$${finalBillValue}`;
//         }
//       }
//       button.forEach((btn2, keys) => {
//         if (key !== keys) {
//           btn2.classList.remove('active');
//         }
//       })
//     })
//   })
// }


// const isNumeric = (value) => {
//   return !isNaN(parseFloat(value)) && !isNaN(value);
// }

// const inputValidation = async (element, textElement, amount) => {
//   if (element.value === '') {
//     textElement.classList.remove('warning');
//     element.classList.remove('warning');
//     amount.innerHTML = '$0.00';
//     resetButton.classList.add('disabled');
//     if (isActive === true) {
//       resetButton.classList.remove('disabled');
//     }
//   } else if (isNumeric(element.value)) {
//     if (Number(element.value) === 0) {
//       textElement.innerHTML = 'Can\'t be zero';
//       textElement.classList.add('warning');
//       element.classList.add('warning');
//       amount.innerHTML = '$0.00';
//     } else {
//       elementVal = Number(element.value);
//       textElement.classList.remove('warning');
//       element.classList.remove('warning');
//       if (isActive === false) {
//         amount.innerHTML = '$0.00';
//       } else {
//         displayBillAmount();
//       }
//       resetButton.classList.remove('disabled');
//       resetButton.onclick = () => {
//         resetAll();
//       }
//     }
//   } else {
//     textElement.innerHTML = 'Must be a number';
//     textElement.classList.add('warning');
//     element.classList.add('warning');
//     amount.innerHTML = '$0.00';
//   }
// }

// const resetAll = () => {
//   billAmount.value = null;
//   numOfPeople.value = null;
//   customInput.value = null;
//   resetButton.classList.add('disabled');
//   textWarning1.classList.remove('warning');
//   textWarning2.classList.remove('warning');
//   billAmount.classList.remove('warning');
//   numOfPeople.classList.remove('warning');
//   tipAmount.innerHTML = '$0.00';
//   totalAmount.innerHTML = '$0.00';
//   isActive = false;
//   if (button) {
//     button.forEach((btn, i) => {
//       btn.classList.remove('active');
//     });
//   }
//   tip = 0;
//   resetButton.classList.add('disabled');
// }

// billAmount.onkeyup = () => {
//   inputValidation(billAmount, textWarning1, tipAmount);
//   alert(test);
// }

// numOfPeople.onkeyup = () => {
//   inputValidation(numOfPeople, textWarning2, total);
// }