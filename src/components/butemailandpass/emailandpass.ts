export enum Attribu {
    "text" = "text",
    "tittle" = "tittle"
    
    
}

class Btnpass extends HTMLElement {
    text?: string;
    tittle?: string;
    
    
    static get observedAttributes() {
        const attrs: Record<Attribu, null> = {
        
            text: null,
            tittle: null
            
            
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
        propName: Attribu,
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
                <h3>${this.tittle}</h3>
                <input type="button" placeholder = "${this.text}">
                </section>
                `;
            }
        }
    }
    
customElements.define("btn-pass", Btnpass);
export default Btnpass;