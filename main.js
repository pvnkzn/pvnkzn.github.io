const backToTop = document.getElementById("backToTop");

backToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


const images = document.querySelectorAll('.image-grid img');
images.forEach(img => {
    img.addEventListener('mousemove', e => {
        const rect = img.getBoundingClientRect();
        const x = e.clientX - rect.left; // mouse X inside image
        const y = e.clientY - rect.top;  // mouse Y inside image
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * 10; // max 10deg
        const rotateY = ((x - centerX) / centerX) * 10; // max 10deg

        img.style.transform = `perspective(500px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
    });

    img.addEventListener('mouseleave', () => {
        img.style.transform = 'perspective(500px) rotateX(0deg) rotateY(0deg)';
    });
});