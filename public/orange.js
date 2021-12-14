
const orange_increment = document.getElementById('orange_increment');
const orange_decrement = document.getElementById('orange_decrement');


const orange_count_display = document.getElementById('orange_count_display');

const orange = localStorage.getItem('orange') | 0   ;

orange_count_display.textContent = orange ? orange : '0';

function increment_orange() {
  const old_value = localStorage.getItem("orange") | 0;
  const new_value = old_value + 1;
  localStorage.setItem("orange", new_value);
  orange_count_display.textContent = new_value? new_value: "0";
}

function decrement_orange() {
    const old_value = localStorage.getItem("orange") | 0;
    const new_value = Math.max(0, old_value - 1);
    localStorage.setItem("orange", new_value);
    orange_count_display.textContent = new_value? new_value: "0";
  }



orange_increment.addEventListener('click', increment_orange);

orange_decrement.addEventListener('click', decrement_orange);

