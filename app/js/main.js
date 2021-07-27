// Input Fields
const billInputField = document.querySelector('#bill__input');
const peopleInputField = document.querySelector('#num-of-ppl__input');
const customInputField = document.querySelector('#custom__input');


// Buttons
const tipButtons = document.querySelectorAll('#tip-btn'); // includes custom input field
const resetButton = document.querySelector('#reset-btn');


// Text Labels
const tipAmountLabel = document.querySelector('#tip-amount');
const totalAmountLabel = document.querySelector('#total');
const billWarningLabel = document.querySelector('#text-warning-1');
const peopleWarningLabel = document.querySelector('#text-warning-2');


// Default Values
const defaultTipAmountState = tipAmountLabel.innerHTML;
const defaultTotalAmountState = totalAmountLabel.innerHTML;
let tipAmount = 0;


// Add Class Functions
const addWarningClass = (element) => {
  element.classList.add('warning');
}

const addDisableBtnClass = (element) => {
  element.classList.add('disabled');
}

const addWarningMessage1 = (element) => {
  element.innerHTML = 'Can\'t be zero';
}

const addWarningMessage2 = (element) => {
  element.innerHTML = 'Must be a number';
}


// Remove Class Functions
const removeWarningClass = (element) => {
  element.classList.remove('warning');
}

const removeDisableBtnClass = (element) => {
  element.classList.remove('disabled');
}

const removeWarningMessage1 = (element) => {
  element.innerHTML = null;
}

const removeWarningMessage2 = (element) => {
  element.innerHTML = null;
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


// Reset Button Logic
const resetBtnLogic = () => {
  if (billInputField.value === '' && peopleInputField.value === '' && customInputField.value === '') {
    addDisableBtnClass(resetButton);
  } else {
    removeDisableBtnClass(resetButton);
  }
}


// Input Validation Function
const inputValidation = (inputField, warningLabel, resetBtn) => {
  if (inputField.value === '') {
    removeWarningClass(inputField);
    removeWarningClass(warningLabel);
    removeWarningMessage1(warningLabel);
    removeWarningMessage2(warningLabel);
  } else {
    if (!isNumeric(inputField.value)) {
      addWarningClass(inputField);
      addWarningClass(warningLabel);
      addWarningMessage2(warningLabel);
    } else if (Number(inputField.value) === 0) {
      addWarningClass(inputField);
      addWarningClass(warningLabel);
      addWarningMessage1(warningLabel);
    } else {
      removeWarningClass(inputField);
      removeWarningClass(warningLabel);
      removeWarningMessage1(warningLabel);
      removeWarningMessage2(warningLabel);
    }
  }
}

// Onclick/Onkeyup Functions
billInputField.onkeyup = () => {
  resetBtnLogic();
  inputValidation(billInputField, billWarningLabel, resetButton);
}

peopleInputField.onkeyup = () => {
  resetBtnLogic();
  inputValidation(peopleInputField, peopleWarningLabel, resetButton);
}

customInputField.onkeyup = () => {
  resetBtnLogic();
  inputValidation(customInputField, null, resetButton);
}

resetButton.onclick = () => {
  billInputField.value = null;
  peopleInputField.value = null;
  customInputField.value = null;
  tipAmountLabel.innerHTML = defaultTipAmountState;
  totalAmountLabel.innerHTML = defaultTotalAmountState;
  tip = 0;
  removeWarningClass(billInputField); // removes 'warning' CLASS from BILL input field
  removeWarningClass(billWarningLabel); // removes 'warning' LABEL from BILL input field
  removeWarningClass(peopleInputField); // removes 'warning' CLASS from NUMBER OF PEOPLE field
  removeWarningClass(peopleWarningLabel); // removes 'warning' CLASS from NUMBER OF PEOPLE input field
  removeWarningClass(customInputField); // removes 'warning' CLASS from CUSTOM input field
  addDisableBtnClass(resetButton); // removes 'disabled' CLASS of RESET button
}





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