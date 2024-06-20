document.querySelectorAll('.test-button').forEach(button => {
    button.addEventListener('click', () => {
        const url = document.getElementById('url').value;
        if (url) {
            alert(`${button.textContent} started for URL: ${url}`);
            // Here you can add the functionality to start the specific tests
        } else {
            alert('Please enter a URL to be tested.');
        }
    });
});
