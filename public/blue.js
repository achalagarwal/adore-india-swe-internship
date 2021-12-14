
const blue_increment = document.getElementById('blue_increment');
const blue_decrement = document.getElementById('blue_decrement');


const blue_count_display = document.getElementById('blue_count_display');

const blue = localStorage.getItem('blue') | 0   ;

blue_count_display.textContent = blue ? blue : '0';

function increment_blue() {
  const old_value = localStorage.getItem("blue") | 0;
  const new_value = old_value + 1;
  localStorage.setItem("blue", new_value);
  blue_count_display.textContent = new_value? new_value: "0";
}

function decrement_blue() {
    const old_value = localStorage.getItem("blue") | 0;
    const new_value = Math.max(0, old_value - 1);
    localStorage.setItem("blue", new_value);
    blue_count_display.textContent = new_value? new_value: "0";
  }



blue_increment.addEventListener('click', increment_blue);

blue_decrement.addEventListener('click', decrement_blue);

