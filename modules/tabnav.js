export default function  initTabNav () {
    const tabMenu = document.querySelectorAll('.js-tabMenu li');
    const tabContent = document.querySelectorAll('.js-tabContent section');
    const activeClass = 'ativo';

    tabContent[0].classList.add(activeClass);
    
    if (tabMenu.length && tabContent.length) {
        function activeTab(index) {
            tabContent.forEach((section) => {
                section.classList.remove(activeClass);
            });
            tabContent[index].classList.add(activeClass);
        }
        
        tabMenu.forEach((itemMenu, index) => {
            itemMenu.addEventListener('click', () => {
                activeTab(index);
            });
        });
    }
}