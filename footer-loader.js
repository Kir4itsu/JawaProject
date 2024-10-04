// footer-loader.js
document.addEventListener('DOMContentLoaded', function() {
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.body.insertAdjacentHTML('beforeend', data);
            setActiveNavItem();
            setupProfileNavigation();
        });
});

function setupProfileNavigation() {
    const currentPage = window.location.pathname.split("/").pop() || 'index.html';
    const profileLink = document.querySelector('.profile-link');
    
    if (profileLink) {
        profileLink.addEventListener('click', function(e) {
            e.preventDefault();
            // Jika berada di index.html, arahkan ke profilen.html
            if (currentPage === 'index.html' || currentPage === '') {
                window.location.href = 'profilen.html';
            } else {
                // Untuk halaman lain, arahkan ke profile.html
                window.location.href = 'profile.html';
            }
        });
    }
}

function setActiveNavItem() {
    const currentPage = window.location.pathname.split("/").pop();
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        const href = item.getAttribute('href');
        if (href && href !== '#' && href === currentPage) {
            item.classList.add('active');
            item.querySelector('.moon-effect').style.display = 'block';
        } else {
            item.classList.remove('active');
            item.querySelector('.moon-effect').style.display = 'none';
        }
    });
}