import { setCurrent } from "..";
import b_cc_i from "../img/blueberry-cheesecake.jpg";
import ch_cc_i from "../img/chocolate-cheesecake.jpg";
import cs_cc_i from "../img/custom-cheesecake.jpg";
import p_cc_i from "../img/peanut-cheesecake.jpg";
import r_cc_i from "../img/rainbow-cheesecake.jpg";
import wch_cc_i from "../img/white-chocolate-cheesecake.jpg";

function createCard(img, text) {

    const card = document.createElement('div');
    card.classList.add('card');

    img.classList.add('img-menu');
    card.appendChild(img);

    const txt_con = document.createElement('h2');
    txt_con.textContent = text;
    card.appendChild(txt_con);

    return card;
};


function menuScreen() {
    const menuGrid = document.createElement('div');
    menuGrid.id = 'menuGrid';

    const b_cc = new Image();
    b_cc.src = b_cc_i
    const b_cc_t = "Blueberry Cheesecake";
    menuGrid.appendChild(createCard(b_cc, b_cc_t));

    const ch_cc = new Image();
    ch_cc.src = ch_cc_i
    const ch_cc_t = "Chocolate Cheesecake";
    menuGrid.appendChild(createCard(ch_cc, ch_cc_t));    
    
    const p_cc = new Image();
    p_cc.src = p_cc_i
    const p_cc_t = "Peanut Cheesecake";
    menuGrid.appendChild(createCard(p_cc, p_cc_t));

    const r_cc = new Image();
    r_cc.src = r_cc_i
    const r_cc_t = "Rainbow Cheesecake";
    menuGrid.appendChild(createCard(r_cc, r_cc_t));

    const wch_cc = new Image();
    wch_cc.src = wch_cc_i
    const wch_cc_t = "White Chocolate Cheesecake";
    menuGrid.appendChild(createCard(wch_cc, wch_cc_t));

    const cs_cc = new Image();
    cs_cc.src = cs_cc_i
    const cs_cc_t = "Custom Cheesecake";
    menuGrid.appendChild(createCard(cs_cc, cs_cc_t));


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