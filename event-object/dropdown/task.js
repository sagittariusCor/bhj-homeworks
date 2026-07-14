const dropdownValue = document.querySelectorAll('.dropdown__value');
dropdownValue.forEach((btn) => {
    
        const dropdownContainer = btn.closest('.dropdown'); 
        const dropdownList = dropdownContainer.querySelector('.dropdown__list');
        const dropdownLinks = dropdownList.querySelectorAll('.dropdown__link');
        btn.addEventListener('click', function() {
        dropdownList.classList.toggle('dropdown__list_active');
    });
    
    dropdownLinks.forEach((link) => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            btn.textContent = link.textContent.trim();
            dropdownList.classList.remove('dropdown__list_active');
        });  
});
});