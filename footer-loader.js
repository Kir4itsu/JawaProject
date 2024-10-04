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
    
    // Jika berada di index.html, arahkan link profil ke profilen.html
    if (currentPage === 'index.html' || currentPage === '') {
        const profilLink = document.querySelector('.nav-item[href="profilen.html"]');
        if (profilLink) {
            profilLink.href = 'profilen.html';
        }
    }
    
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