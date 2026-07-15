let tab = document.querySelectorAll('.tab');
tab.forEach((tabItem) => {
    tabItem.addEventListener('click', () => {
        const tabIndex = Array.from(tab).indexOf(tabItem);
        const navigation = tabItem.closest('.tab__navigation');
        const contentContainer = navigation.nextElementSibling;
        const allTabs = navigation.querySelectorAll('.tab');
        const allContents = contentContainer.querySelectorAll('.tab__content');
        allTabs.forEach((t) => t.classList.remove('tab_active'));
        allContents.forEach((c) => c.classList.remove('tab__content_active'));
        tabItem.classList.add('tab_active');
        allContents[tabIndex].classList.add('tab__content_active');
    });
    });