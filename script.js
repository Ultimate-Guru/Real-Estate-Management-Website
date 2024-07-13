document.querySelectorAll('.card button').forEach(button => {
    button.addEventListener('click', () => {
        alert('Button clicked!');
    });
});

document.querySelector('.search-bar button').addEventListener('click', () => {
    const searchQuery = document.querySelector('.search-bar input').value;
    alert(`Searching for: ${searchQuery}`);
});