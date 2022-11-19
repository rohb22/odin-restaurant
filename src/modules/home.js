function createHome(){
    const welcome = document.createElement('div');
    welcome.classList.add('welcome');

    const title = document.createElement('h2');
    title.classList.add('home-title');
    title.textContent = "TEASECAKE";

    welcome.appendChild(title);

    const subtext = document.createElement("p");
    subtext.classList.add('subtext');
    subtext.textContent = "Cake that will turn you on!"

    welcome.appendChild(subtext);

    return welcome;
}

function setCurrent(id) {
    const current = document.querySelector(".tab.active");
    if (current) {
        current.classList.remove('active');
    }

    const homeBtn = document.getElementById(id);
    homeBtn.classList.add('active');
}

function loadHome() {
    const content = document.querySelector('#main-content');

    content.textContent = " ";

    const welcome = createHome();
    setCurrent('home');

    content.appendChild(welcome);
}

export default loadHome;