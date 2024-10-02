let currentSlide = 0; // Indeks untuk melacak slide yang aktif
const slides = document.querySelectorAll('.recommendation-item'); // Ambil semua item rekomendasi

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active'); // Hapus kelas aktif dari semua slide
        if (i === index) {
            slide.classList.add('active'); // Tambahkan kelas aktif pada slide yang sesuai
        }
    });
}

function showNextSlide() {
    currentSlide = (currentSlide + 1) % slides.length; // Pindah ke slide berikutnya
    showSlide(currentSlide);
}

// Tampilkan slide pertama saat halaman dimuat
showSlide(currentSlide);

// Set interval untuk mengubah slide setiap beberapa detik
setInterval(showNextSlide, 9000); // Ganti setiap 9 detik