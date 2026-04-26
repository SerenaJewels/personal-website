const infoPanelTemplate = document.createElement('template');
infoPanelTemplate.innerHTML =

`
    <link rel="stylesheet" href = "/styles/infopanel.css">

    <div class="info-container">
        <slot name="title" class=title></slot>
        <slot name="subtitle" class=subtitle></slot> 
        <slot name="text" class=text></slot>
    </div>

`;


class InfoPanel extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(infoPanelTemplate.content.cloneNode(true));
    }
}

window.customElements.define('info-panel', InfoPanel);