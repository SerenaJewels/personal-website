const template = document.createElement('template');
template.innerHTML = `
    <style>
        .info-container {
            margin: 1rem;
            font-color: var(--TEXT-COLOR);
        }
        

        .title {
            margin: 0;
            font-family: "Hi Melody", sans-serif;
            font-size: 30px;
        }
        
        .subtitle {
            margin: 0;
            margin-top: -1rem;
            text-indent: 1rem;
            font-family: "Hi Melody", sans-serif;
            font-size: 24px;
        }

        * {
            color: var(--TEXT-COLOR);
        }

    </style>

    <div class="info-container">
        <slot name="title" class=title></slot>
        <slot name="subtitle" class=subtitle></slot> 
        <slot name="text"></slot>
    </div>

`;


class InfoPanel extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}

window.customElements.define('info-panel', InfoPanel)