import "./components/export"
import "./components/Form/index"
import "./components/Register/form2"


class AppContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {
        const something = this.ownerDocument.createElement('form-log');
        this.shadowRoot?.appendChild(something);
    }
}

customElements.define('app-container', AppContainer)