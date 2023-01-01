import loadPage from "./modules/page-load";
import loadHome from "./modules/home";
import loadMenu from "./modules/menu";
import loadContact from "./modules/contact";
import './style.css';


load();

function changePage() {
    const homeBtn = document.getElementById('home').addEventListener('click', loadHome);
    const menuBtn = document.getElementById('menu').addEventListener('click', loadMenu);
    const contactBtn = document.getElementById('contact').addEventListener('click', loadContact);
}

function load(){
    loadPage();
    loadContact();
    changePage();
};


export function setCurrent(id) {
    const current = document.querySelector(".tab.active");
    if (current) {
        current.classList.remove('active');
    }

    const homeBtn = document.getElementById(id);
    homeBtn.classList.add('active');
};

