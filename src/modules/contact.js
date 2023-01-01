import { setCurrent } from "..";
import fb_icon from "../img/fb .png";
import insta_icon from "../img/insta.png";
import twit_icon from "../img/twit.jpeg";


function createContact() {
    const contact = document.createElement('div');
    contact.classList.add('contact-con')

    const title = document.createElement('h2');
    title.textContent = "For Orders/Inquiries Kindly Contact Us:";
    title.classList.add('contact-title');
    contact.appendChild(title);

    const contacts = document.createElement('div');
    contacts.classList.add('contacts');

    const fb_div = document.createElement('div');
    const fb_img = new Image();
    fb_img.src = fb_icon;
    const fb_txt = document.createElement('h2');
    fb_txt.textContent = "@teasecakeofficial";
    fb_div.appendChild(fb_img);
    fb_div.appendChild(fb_txt);
    contacts.appendChild(fb_div);

    const insta_div = document.createElement('div');
    const insta_img = new Image();
    insta_img.src = insta_icon;
    const insta_txt = document.createElement('h2');
    insta_txt.textContent = "@teasecake";
    insta_div.appendChild(insta_img);
    insta_div.appendChild(insta_txt);
    contacts.appendChild(insta_div);

    const twit_div = document.createElement('div');
    const twit_img = new Image();
    twit_img.src = twit_icon;
    const twit_txt = document.createElement('h2');
    twit_txt.textContent = "@t3asecake";
    twit_div.appendChild(twit_img);
    twit_div.appendChild(twit_txt);
    contacts.appendChild(twit_div);

    contact.appendChild(contacts);

    return contact;
};

function loadContact() {

    const content = document.querySelector('#main-content');
    content.textContent = ' ';

    const contact = createContact();
    setCurrent('contact');

    content.appendChild(contact);

};

export default loadContact;