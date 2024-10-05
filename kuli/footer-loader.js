// footer-loader.js for kuli
document.addEventListener('DOMContentLoaded', function() {
    fetch('footer-kuli.html')
        .then(response => response.text())
        .then(data => {
            document.body.insertAdjacentHTML('beforeend', data);
            setActiveNavItem();
            setupNavigation();
        });
});

function setupNavigation() {
    const homeLink = document.querySelector('.home-link');
    const profileLink = document.querySelector('.profile-link');
    const currentPage = getCurrentPage();

    if (homeLink) {
        homeLink.addEventListener('click', function(e) {
            e.preventDefault();
            if (currentPage === 'kuli.html') {
                window.location.href = 'kuli.html';
            } else {
                window.location.href = '../index.html';
            }
        });
    }

    if (profileLink) {
        profileLink.addEventListener('click', function(e) {
            e.preventDefault();
            window.location.href = 'profile-kuli.html';
        });
    }
}

function getCurrentPage() {
    return window.location.pathname.split("/").pop() || '../index.html';
}

function setActiveNavItem() {
    const currentPage = getCurrentPage();
    const navItems = document.querySelectorAll('.nav-item');
    
    navItems.forEach(item => {
        item.classList.remove('active');
        item.querySelector('.moon-effect').style.display = 'none';
    });

    if (currentPage === '../index.html' || currentPage === 'kuli.html' || currentPage === '') {
        const homeLink = document.querySelector('.home-link');
        if (homeLink) {
            homeLink.classList.add('active');
            homeLink.querySelector('.moon-effect').style.display = 'block';
        }
    } else if (currentPage === 'lihat-proyek.html') {
        const lihatProyekLink = document.querySelector('a[href="lihat-proyek.html"]');
        if (lihatProyekLink) {
            lihatProyekLink.classList.add('active');
            lihatProyekLink.querySelector('.moon-effect').style.display = 'block';
        }
    } else if (currentPage === 'histori-kuli.html') {
        const historiLink = document.querySelector('a[href="histori-kuli.html"]');
        if (historiLink) {
            historiLink.classList.add('active');
            historiLink.querySelector('.moon-effect').style.display = 'block';
        }
    } else if (currentPage === 'profile-kuli.html') {
        const profileLink = document.querySelector('.profile-link');
        if (profileLink) {
            profileLink.classList.add('active');
            profileLink.querySelector('.moon-effect').style.display = 'block';
        }
    }
}