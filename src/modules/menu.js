import { setCurrent } from "..";


function menuScreen() {
    const menuGrid = document.createElement('div');
    menuGrid.id = 'menuGrid';

    return menuGrid;
};

function loadMenu()  {

    const content = document.querySelector('#main-content');
    content.textContent = ' ';

    const menu = menuScreen();
    setCurrent("menu");

    content.appendChild(menu);
};

export default loadMenu;