class Btnaccount extends HTMLElement {
    
    
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    
    connectedCallback() {
        this.render();
    }
    
    
        render() {
            if (this.shadowRoot) {
                this.shadowRoot.innerHTML = `
                <section>
                <button> Log in</button>
                </section>
                `;
            }
        }
    }
    
customElements.define("btn-account", Btnaccount);
export default Btnaccount;