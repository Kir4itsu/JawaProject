document.addEventListener('DOMContentLoaded', function() {
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.body.insertAdjacentHTML('beforeend', data);
            setActiveNavItem();
            setupConditionalNavigation();
        });
});

function setupConditionalNavigation() {
    const currentPage = window.location.pathname.split("/").pop() || 'index.html';
    const navItems = document.querySelectorAll('.nav-item');
    
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            let targetPage = '';
            
            if (currentPage === 'index.html' || currentPage === '') {
                if (item.classList.contains('home-link')) {
                    return; // Stay on index.html
                } else if (item.classList.contains('profile-link')) {
                    targetPage = 'profilen.html';
                } else if (item.href.includes('form.html')) {
                    targetPage = 'formn.html';
                } else if (item.href.includes('histori.html')) {
                    targetPage = 'historin.html';
                }
            } else if (currentPage === 'historin.html') {
                if (item.classList.contains('home-link')) {
                    targetPage = 'index.html';
                } else if (item.classList.contains('profile-link')) {
                    targetPage = 'profilen.html';
                } else if (item.href.includes('form.html')) {
                    targetPage = 'formn.html';
                } else if (item.href.includes('histori.html')) {
                    return; // Stay on historin.html
                }
            } else if (currentPage === 'formn.html') {
                if (item.classList.contains('home-link')) {
                    targetPage = 'index.html';
                } else if (item.classList.contains('profile-link')) {
                    targetPage = 'profilen.html';
                } else if (item.href.includes('form.html')) {
                    return; // Stay on formn.html
                } else if (item.href.includes('histori.html')) {
                    targetPage = 'historin.html';
                }
            } else if (currentPage === 'profile.html') {
                if (item.classList.contains('home-link')) {
                    targetPage = 'jawa.html';
                } else if (item.classList.contains('profile-link')) {
                    return; // Stay on profile.html
                } else if (item.href.includes('form.html')) {
                    targetPage = 'form.html';
                } else if (item.href.includes('histori.html')) {
                    targetPage = 'histori.html';
                }
            } else {
                if (item.classList.contains('home-link')) {
                    targetPage = 'index.html';
                } else if (item.classList.contains('profile-link')) {
                    targetPage = 'profile.html';
                } else if (item.href.includes('form.html')) {
                    targetPage = 'form.html';
                } else if (item.href.includes('histori.html')) {
                    targetPage = 'histori.html';
                }
            }
            
            if (targetPage) {
                window.location.href = targetPage;
            }
        });
    });
}

function setActiveNavItem() {
    const currentPage = window.location.pathname.split("/").pop() || 'index.html';
    const navItems = document.querySelectorAll('.nav-item');
    
    navItems.forEach(item => {
        item.classList.remove('active');
    });

    if (currentPage === 'index.html' || currentPage === '') {
        document.querySelector('.home-link').classList.add('active');
    } else if (currentPage.includes('form')) {
        document.querySelector('a[href="form.html"]').classList.add('active');
    } else if (currentPage.includes('histori')) {
        document.querySelector('a[href="histori.html"]').classList.add('active');
    } else if (currentPage.includes('profile')) {
        document.querySelector('.profile-link').classList.add('active');
    }
}