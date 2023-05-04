export enum Attrib {
    "img" = "img",
    "tittle" = "tittle"
    
    
}

class Btnreg extends HTMLElement {
    img?: string;
    tittle?: string;
    
    
    static get observedAttributes() {
        const attrs: Record<Attrib, null> = {
        
            img: null,
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
        propName: Attrib,
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
                <input type="button" placeholder = <img src="${this.img}">"${this.tittle}">
                </section>
                `;
            }
        }
    }
    
customElements.define("btn-reg", Btnreg);
export default Btnreg;