
class Text_up extends HTMLElement {

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
                    <h1> Log in</h1>
                    <h4>Check your followers' new plays</h4>
                </section>
                `;
        }
    }
}
customElements.define("Text-up", Text_up);
export default Text_up;