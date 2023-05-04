
export enum Attribut {
    "btn_img" = "btn_img",
    "name" = "name",
    
}

class Btnsec extends HTMLElement {
    btn_img?: string;
    name?: string;
    
    
    static get observedAttributes() {
        const attrs: Record<Attribut, null> = {
        
            btn_img: null,
            name: null
            
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
                <link rel="stylesheet" href="./components/Side-profile/scard.css">
                <section>
                <button><img src="${this.btn_img}">${this.name}</button>
                </section>
                `;
            }
        }
    }
    
customElements.define("btn-sec", Btnsec);
export default Btnsec;