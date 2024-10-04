// footer-loader.js
document.addEventListener('DOMContentLoaded', function() {
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.body.insertAdjacentHTML('beforeend', data);
            setActiveNavItem();
        });
});

function setActiveNavItem() {
    const currentPage = window.location.pathname.split("/").pop();
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        if (item.getAttribute('href') === currentPage) {
            item.classList.add('active');
            item.querySelector('.moon-effect').style.display = 'block';
        } else {
            item.classList.remove('active');
            item.querySelector('.moon-effect').style.display = 'none';
        }
    });
}