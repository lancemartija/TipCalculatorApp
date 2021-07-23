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