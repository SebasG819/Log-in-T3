import "./components/export"
import "./components/Form/index"
import "./components/Register/form2"
import "./components/landing/landing"


class AppContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {
        const something = this.ownerDocument.createElement('land-ing');
        this.shadowRoot?.appendChild(something);
    }
}

customElements.define('app-container', AppContainer)