// Example: Simple form validation
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', function (event) {
        const inputs = form.querySelectorAll('input');
        let valid = true;
        inputs.forEach(input => {
            if (input.value.trim() === '') {
                valid = false;
                input.style.border = '2px solid red';  // Highlight empty fields
            } else {
                input.style.border = '1px solid #ccc';
            }
        });
        if (!valid) {
            event.preventDefault();  // Prevent form submission if validation fails
        }
    });
});
