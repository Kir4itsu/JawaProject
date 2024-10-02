let currentIndex = 0;

function showNextSlide() {
    const slides = document.querySelectorAll('.recommendation-item');
    
    // Sembunyikan item yang sedang aktif
    slides[currentIndex].classList.remove('active');
    
    // Update current index
    currentIndex = (currentIndex + 1) % slides.length; // Loop kembali ke awal
    
    // Tampilkan item berikutnya
    slides[currentIndex].classList.add('active');
}

// Set interval untuk mengubah slide setiap beberapa detik
setInterval(showNextSlide, 3000); // Ganti setiap 3 detik