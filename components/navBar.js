const navBarTemplate = document.createElement('template');

navBarTemplate.innerHTML = `

<link rel="stylesheet" href = "styles/base.css">
<link rel="stylesheet" href = "styles/navbar.css">

<ul>
    <li><a href="index.html">Home</a></li>
    <li><a href="updates.html">Weekly Wednesday Updates</a></li>
    <li><a href="art.html">Art</a></li>
    <li><a href="library.html">Library</a></li>
    <li><a href="shrines.html">Shrines</a></li>
    <li><a href="guestbook.html">Guestbook</a></li>
    <li><a href="sitemap.html">Sitemap</a></li>
    <li><a href="credits.html">Credits</a></li>
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