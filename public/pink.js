
const pink_increment = document.getElementById('pink_increment');
const pink_decrement = document.getElementById('pink_decrement');


const pink_count_display = document.getElementById('pink_count_display');

const pink = localStorage.getItem('pink') | 0   ;

pink_count_display.textContent = pink ? pink : '0';

function increment_pink() {
  const old_value = localStorage.getItem("pink") | 0;
  const new_value = old_value + 1;
  localStorage.setItem("pink", new_value);
  pink_count_display.textContent = new_value? new_value: "0";
}

function decrement_pink() {
    const old_value = localStorage.getItem("pink") | 0;
    const new_value = Math.max(0, old_value - 1);
    localStorage.setItem("pink", new_value);
    pink_count_display.textContent = new_value? new_value: "0";
  }



pink_increment.addEventListener('click', increment_pink);

pink_decrement.addEventListener('click', decrement_pink);

