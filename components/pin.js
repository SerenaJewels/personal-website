const pinPanelTemplate = document.createElement('template');
pinPanelTemplate.innerHTML =

`
    <link rel="stylesheet" href = "/styles/testing.css">

    <div class="info-container">
        <slot name="pin" class = pin>

        </slot>
    </div>

`;


class Pin extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(infoPanelTemplate.content.cloneNode(true));
    }
}

window.customElements.define('info-panel', Pin);