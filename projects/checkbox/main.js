const button = document.getElementById('calculate-button');
const checkboxes = document.querySelectorAll('.product');
const totalPriceElement = document.getElementById('total-price');

button.addEventListener('click', () => {
  let totalPrice = 0;

  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      totalPrice += Number(checkbox.value);
    }
  });

  totalPriceElement.textContent = totalPrice;
});
