function createBtn(id, text) {
    const item = document.createElement('button');
    item.setAttribute('id', id);
    const span = document.createElement('span');
    span.textContent = text;

    item.appendChild(span)
    item.classList.add('tab');
    return item;
}

function createNav(id) {
    const nav = document.createElement('nav');
    nav.setAttribute("id", id);

    const homeBtn = createBtn('home', 'HOME');
    const menuBtn = createBtn('menu', 'MENU');
    const contactBtn = createBtn('contact', 'CONTACT');

    nav.appendChild(homeBtn);
    nav.appendChild(menuBtn);
    nav.appendChild(contactBtn);
    return nav;

}

function createContent(id) {
    const content = document.createElement('div');
    content.setAttribute('id', id);

    return content;
}

function createFooter(id, text) {
    const footer = document.createElement('footer');
    footer.setAttribute('id', id);
    const ftext = document.createElement('h3');
    ftext.textContent = text;

    footer.appendChild(ftext);
    return footer;
}

function loadPage(){
    const container = document.querySelector('#content');

    const nav = createNav('nav');
    container.appendChild(nav);

    const content = createContent('main-content');
    container.appendChild(content);

    const footer = createFooter('footer', "Made by @rohb22" );
    container.appendChild(footer);
}

export default loadPage;
