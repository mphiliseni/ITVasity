// add javascript logic to the app.js
document.addEventListener('DOMContentLoaded', function () {
    alert('Welcome to CSS Week 2! 🎉 ');
});

const lazyImages = document.querySelectorAll('img.lazy');

const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.remove('lazy');
            obs.unobserve(img);
        }
    });
});

lazyImages.forEach(img => observer.observe(img));
