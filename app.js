document.addEventListener('DOMContentLoaded', function() {
  let screen = document.querySelector('.screen');
  let buttons = document.querySelectorAll('.btn');
  let clear = document.querySelector('.btn-clear');
  let equal = document.querySelector('.btn-equal');

  buttons.forEach(button => {
    button.addEventListener('click', function() {
      const buttonText = this.textContent;
      if (buttonText === 'C') {
        screen.value = '';
      } else if (buttonText !== '=') {
        screen.value += buttonText;
      }
    });
  });

  clear.addEventListener('click', function() {
    screen.value = '';
  });

  equal.addEventListener('click', function() {
    try {
      const result = eval(screen.value);
      screen.value = result;
    } catch (error) {
      screen.value = 'Error';
    }
  });
});
