document.querySelectorAll('.recommendation-item').forEach(item => {
    item.addEventListener('mouseover', () => {
        const hoverContent = item.querySelector('.hover-content');
        hoverContent.style.opacity = '1';
        hoverContent.style.transform = 'scale(1)';
    });
    item.addEventListener('mouseout', () => {
        const hoverContent = item.querySelector('.hover-content');
        hoverContent.style.opacity = '0';
        hoverContent.style.transform = 'scale(0.9)';
    });
});
