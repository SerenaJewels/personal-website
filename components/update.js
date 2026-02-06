const updateTemplate = document.createElement('template');

updateTemplate.innerHTML = `

<p>Hello World</p>

`;

class Update extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode:'open'});
        this.shadowRoot.appendChild(updateTemplate.content.cloneNode(true));
    }
}

window.customElements.define('wrapup', Update);