const navBarTemplate = document.createElement('template');

navBarTemplate.innerHTML = `

<link rel="stylesheet" href = "styles/base.css">
<link rel="stylesheet" href = "styles/navbar.css">

<ul>
    <li><a href="index.html">Home</a></li>
</ul>

`;

class NavBar extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode:'open'});
        this.shadowRoot.appendChild(navBarTemplate.content.cloneNode(true));
    }
}

window.customElements.define('nav-bar', NavBar);