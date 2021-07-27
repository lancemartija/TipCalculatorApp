// Input Fields
const billInputField = document.querySelector('#bill__input');
const peopleInputField = document.querySelector('#num-of-ppl__input');
const customInputField = document.querySelector('#custom__input');


// Buttons
const tipButtons = document.querySelectorAll('#tip-btn');
const resetButton = document.querySelector('#reset-btn');


// Text Labels
const tipAmountState = document.querySelector('#tip-amount');
const totalAmountState = document.querySelector('#total');
const billWarningLabel = document.querySelector('#text-warning-1');
const peopleWarningLabel = document.querySelector('#text-warning-2');
const dummy = document.querySelector('#dummy-text-warning');


// Default Values
const defaultTipAmountState = tipAmountState.innerHTML;
const defaultTotalAmountState = totalAmountState.innerHTML;
let totalPerPerson = 0;
let isActive = false;
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

const toggleActiveStateClass = (element) => {
  element.classList.toggle('active');
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

const removeActiveStateClass = (element) => {
  element.classList.remove('active');
}


// Function that returns TRUE if value is Numeric
const isNumeric = (value) => {
  return !isNaN(parseFloat(value)) && !isNaN(value);
}


// Round Up Numbers to 2
const roundUpTo2 = (value) => {
  return Math.round((Number(value) * 100)) / 100;
}


// Reset Button Logic
const resetBtnLogic = () => {
  if (billInputField.value === '' && peopleInputField.value === '' && customInputField.value === '' && !isActive) {
    addDisableBtnClass(resetButton);
  } else {
    removeDisableBtnClass(resetButton);
  }
}


// Input Validation Function
const inputValidation = (inputField, warningLabel) => {
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


// Compute Function
const computeTipAmount = () => {
  if (billInputField.value !== '' && isNumeric(billInputField.value) && isActive) {
    let val = Number(billInputField.value) * tipAmount;
    tipAmountState.innerHTML = `$${roundUpTo2(val)}`;
    totalPerPerson = roundUpTo2(val);
  } else {
    totalPerPerson = null;
    tipAmountState.innerHTML = defaultTipAmountState;
    totalAmountState.innerHTML = defaultTotalAmountState;
  }
}

const computeTotalAmount = () => {
  if (peopleInputField.value !== '' && billInputField.value !== '' && isNumeric(peopleInputField.value) && isNumeric(billInputField.value) && isActive) {
    let val = Number(peopleInputField.value) * totalPerPerson;
    totalAmountState.innerHTML = `$${roundUpTo2(val)}`;
  } else {
    totalAmountState.innerHTML = defaultTotalAmountState;
  }
}


// Onclick/Onkeyup Functions
billInputField.onkeyup = () => {
  resetBtnLogic();
  inputValidation(billInputField, billWarningLabel, resetButton);
  computeTipAmount();
  computeTotalAmount();
}

peopleInputField.onkeyup = () => {
  resetBtnLogic();
  inputValidation(peopleInputField, peopleWarningLabel, resetButton);
  computeTotalAmount();
}

customInputField.onkeyup = () => {
  resetBtnLogic();
  inputValidation(customInputField, dummy, resetButton);
}

if (tipButtons) {
  tipButtons.forEach((btn1, key) => {
    btn1.onclick = () => {
      toggleActiveStateClass(btn1);
      if (!(btn1.classList.contains('active'))) {
        isActive = false;
        tipAmount = null;
      } else {
        setTipAmount(key);
      }
      resetBtnLogic();
      computeTipAmount();
      computeTotalAmount();
      tipButtons.forEach((btn2, keys) => {
        if (key !== keys) {
          removeActiveStateClass(btn2);
        }
      });
    }
  });
}

const setTipAmount = (key) => {
  if (key !== 5) {
    isActive = true;
    customInputField.value = null;
    removeWarningClass(customInputField);
  } else {
    isActive = false;
  }
  if (key === 0) {
    tipAmount = .05;
  } else if (key === 1) {
    tipAmount = .1;
  } else if (key === 2) {
    tipAmount = .15;
  } else if (key === 3) {
    tipAmount = .20;
  } else if (key === 4) {
    tipAmount = .25;
  } else if (key === 5) {
    customInputField.onkeyup = () => {
      isActive = true;
      tipAmount = Number(customInputField.value) / 100;
      computeTipAmount();
      computeTotalAmount();
      inputValidation(customInputField, dummy, resetButton);
      if (customInputField.value === '' || !isNumeric(customInputField.value)) {
        isActive = false;
        tipAmountState.innerHTML = defaultTipAmountState;
        totalAmountState.innerHTML = defaultTotalAmountState;
      }
      resetBtnLogic();
    }
  }
}

const resetAllValues = () => {
  billInputField.value = null;
  peopleInputField.value = null;
  customInputField.value = null;
  tipAmountState.innerHTML = defaultTipAmountState;
  totalAmountState.innerHTML = defaultTotalAmountState;
  tipAmount = null;
  isActive = false;
  removeWarningClass(billInputField);
  removeWarningClass(billWarningLabel);
  removeWarningClass(peopleInputField);
  removeWarningClass(peopleWarningLabel);
  removeWarningClass(customInputField);
  addDisableBtnClass(resetButton);
  if (tipButtons) {
    tipButtons.forEach((btn, i) => {
      btn.classList.remove('active');
    });
  }
}

resetButton.onclick = resetAllValues;