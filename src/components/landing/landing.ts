import styles from "./landing.css"
import "../export"
import "../buttonlanding/buttonlanding"
import "../buttonlanding2/buttonlogin"

export class LandReg extends HTMLElement {
    
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    
    connectedCallback() {
        this.render();
    }
    
        
        render() {
            if (this.shadowRoot) {
                this.shadowRoot.innerHTML = ``;

        

                const container = this.ownerDocument.createElement("section")
                container.className = "section1"
                

                const css = this.ownerDocument.createElement("style")
                css.innerHTML = styles
                this.shadowRoot?.appendChild(css)

                const img = this.ownerDocument.createElement("img")
            img.src="/src/image/Logito.png"
            img.className = "img"
            container.appendChild(img)

                const register = this.ownerDocument.createElement("h1")
                register.innerText = "WELCOME"
                container.appendChild(register)


            const button = this.ownerDocument.createElement("btn-accoun");
                 
                 container.appendChild(button)
            
                 

                 const but = this.ownerDocument.createElement("button-log");
                 
                 container.appendChild(but)


                

            

                
                this.shadowRoot?.appendChild(container)
        

            }
        }
    }
    
customElements.define("land-ing", LandReg);