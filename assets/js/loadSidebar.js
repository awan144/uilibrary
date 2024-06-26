// loadSidebar.js
document.addEventListener("DOMContentLoaded", function () {
    fetch('sidebar.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('body > div > aside').innerHTML = data;
        })
        .catch(error => console.error('Error loading the sidebar:', error));
});
