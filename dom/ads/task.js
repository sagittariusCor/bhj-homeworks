const rotators = document.querySelectorAll('.rotator');
for (let i = 0; i < rotators.length; i++) {
    const rotator = rotators[i];
    const cases = rotator.querySelectorAll('.rotator__case');
    setInterval(function() {
        const active = rotator.querySelector('.rotator__case_active');
        if (active) {
            active.classList.remove('rotator__case_active');
        }
        let next;
        if (active) {
            next = active.nextElementSibling;
        }
        if (!next) {
            next = cases[0];
        }
        next.classList.add('rotator__case_active');
    }, 1000);
}