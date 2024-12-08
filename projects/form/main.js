const firstNameInput = document.getElementById('firstName');
const lastNameInput = document.getElementById('lastName');
const submitButton = document.getElementById('submitBtn');
const responseSpan = document.getElementById('response');

submitButton.addEventListener('click', () => {
    const firstName = firstNameInput.value.trim();
    const lastName = lastNameInput.value.trim();

    if (firstName || lastName) {
        responseSpan.textContent = `Здравствуйте, ${firstName} ${lastName}!`.trim();
    } else {
        responseSpan.textContent = 'Введите хотя бы одно из полей.';
    }
});
