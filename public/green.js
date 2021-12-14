
const green_increment = document.getElementById('green_increment');
const green_decrement = document.getElementById('green_decrement');


const green_count_display = document.getElementById('green_count_display');

const green = localStorage.getItem('green') | 0   ;

green_count_display.textContent = green ? green : '0';

function increment_green() {
  const old_value = localStorage.getItem("green") | 0;
  const new_value = old_value + 1;
  localStorage.setItem("green", new_value);
  green_count_display.textContent = new_value? new_value: "0";
}

function decrement_green() {
    const old_value = localStorage.getItem("green") | 0;
    const new_value = Math.max(0, old_value - 1);
    localStorage.setItem("green", new_value);
    green_count_display.textContent = new_value? new_value: "0";
  }



green_increment.addEventListener('click', increment_green);

green_decrement.addEventListener('click', decrement_green);

