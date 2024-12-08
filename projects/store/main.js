const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const quantities = document.querySelectorAll('.quantity');
const totalPriceEl = document.getElementById('totalPrice');
const makeOrderButton = document.getElementById('makeOrder');
const surnameInput = document.getElementById('surname');
const nameInput = document.getElementById('name');

function updateTotal() {
  let total = 0;

  checkboxes.forEach((checkbox) => {
    const quantityInput = document.getElementById(`${checkbox.id}Qty`);
    const price = parseInt(checkbox.dataset.price, 10);

    if (checkbox.checked && Number(quantityInput.value) > 0) {
      total += price * parseInt(quantityInput.value, 10);
    }
  });

  totalPriceEl.textContent = total.toFixed(2);
}

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener('change', () => {
    const quantityInput = document.getElementById(`${checkbox.id}Qty`);

    if (checkbox.checked) {
      quantityInput.value = 1; 
    } else {
      quantityInput.value = 0; 
    }

    updateTotal();
  });
});


quantities.forEach((quantity) => {
  quantity.addEventListener('input', () => {
    if (quantity.value.startsWith('0') && quantity.value.length > 1) {
      quantity.value = parseInt(quantity.value, 10); 
    }

    if (quantity.value < 0 || isNaN(quantity.value)) {

        quantity.value = 0;
    }

    updateTotal();
  });
});

// Кнопка "Оформить заказ"
makeOrderButton.addEventListener('click', () => {
  const surname = surnameInput.value.trim();
  const name = nameInput.value.trim();
  const total = totalPriceEl.textContent;

  alert(`Заказчик: ${surname} ${name}\nИтого: ${total} р.`);
});
