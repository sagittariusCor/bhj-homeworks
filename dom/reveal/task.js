window.addEventListener('scroll', function() {
    const reveals = document.querySelectorAll('.reveal');
    const windowHeight = window.innerHeight;
    for (let i = 0; i < reveals.length; i++) {
        const block = reveals[i];
        const rect = block.getBoundingClientRect();
        const isVisible = rect.top < windowHeight && rect.bottom > 0;
        if (isVisible) {
            block.classList.add('reveal_active');
        } else {
            block.classList.remove('reveal_active');
        } else {
            block.classList.remove('reveal_active');
        }
}
});