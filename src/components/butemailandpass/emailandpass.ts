export enum Attribut {
    "text" = "text"
    
    
}

class Btnpass extends HTMLElement {
    text?: string;
    
    
    
    static get observedAttributes() {
        const attrs: Record<Attribut, null> = {
        
            text: null,
            
            
        };
        return Object.keys(attrs);
    }
    
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    
    connectedCallback() {
        this.render();
    }
    
    attributeChangedCallback(
        propName: Attribut,
        _: string | undefined,
        newValue: string | undefined
        ) {
            switch (propName) {
                
                default:
                this[propName] = newValue;
                break;
            }
            
            this.render();
        }
        
        render() {
            if (this.shadowRoot) {
                this.shadowRoot.innerHTML = `
                <section>
                <input type="button">
                </section>
                `;
            }
        }
    }
    
customElements.define("btn-pass", Btnpass);
export default Btnpass;