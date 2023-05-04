export enum Attribut {
    "btn_img" = "btn_img",
    "name" = "name",
    
}

class Text_up extends HTMLElement {
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
                this.shadowRoot.innerHTML = ``;
                const container = this.ownerDocument.createElement("section")

                
                const text = this.ownerDocument.createElement("section")
            }
        }
    }
    
customElements.define("form-log", Text_up);
export default Text_up;