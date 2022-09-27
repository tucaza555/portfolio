// When the user scrolls down 50px from the top of the document, resize the header's font size
// window.onload = () => {$(document.getElementById("header2")).hide();}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    let header = document.getElementById("header2");

    if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
        $(document).ready(function(){
            $("#header2").slideDown("fast");
        });
    } else {
        $(document).ready(function(){
            $("#header2").hide();
        });
    }
}

class Header extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <div class="header-logo">
            <h1 class="header-item">Header</h1>
        </div>
        <div class="header-web-links">
            <a href="index.html" class="header-item">Home</a>
            <a href="about.html" class="header-item">About</a>
            <a href="#main-content-two" class="header-item">Projects</a>
            <a href="#main-content-contact" class="header-item">Contact Me</a>
        </div>
        <div class="header-out-links">
            <p class="header-item">Insta</p>
            <p class="header-item">Youtube</p>
            <p class="header-item">Github</p>
            <p class="header-item">LinkedIN</p>
        </div>
      `;
    }
}

class SlideHeader extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <div class="header-logo">
            <h1 class="header-item">Header</h1>
        </div>
        <div class="header-web-links">
            <a href="index.html" class="header-item">Home</a>
            <a href="about.html" class="header-item">About</a>
            <a href="#main-content-two" class="header-item">Projects</a>
            <a href="#main-content-contact" class="header-item">Contact Me</a>
        </div>
        <div class="header-out-links">
            <p class="header-item">Insta</p>
            <p class="header-item">Youtube</p>
            <p class="header-item">Github</p>
            <p class="header-item">LinkedIN</p>
        </div>
      `;
    }
}

customElements.define('main-header', Header);
customElements.define('slide-header', SlideHeader);