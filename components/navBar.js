const navBarTemplate = document.createElement('template');

navBarTemplate.innerHTML = `

<link rel="stylesheet" href = "/styles/base.css">
<link rel="stylesheet" href = "/styles/navbar.css">
<p></p>
<ul>
    <li><a href="/index.html">Home</a></li>
    <li><a href="/pages/library.html">Library</a></li>
<ul>

<p></p>

`;


class NavBar extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode:'open'});
        this.shadowRoot.appendChild(navBarTemplate.content.cloneNode(true));
    }
}

window.customElements.define('nav-bar', NavBar);