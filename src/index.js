import loadPage from "./modules/page-load";
import loadHome from "./modules/home";

load();

// function changePage() {
//     const homeBtn = document.getElementById('home').addEventListener('click', loadHome);
//     const menuBtn = document.getElementById('menu').addEventListener('click', loadMenu);
//     const contactBtn = document.getElementById('contact').addEventListener('click', loadContact);
// }

function load(){
    loadPage();
    loadHome();
}
