import styles from "./register.css"
import "../export"
import  { att } from "../btnregis/buttonregis";
import "../createaccount/btncreateaccoutn"

export class FormReg extends HTMLElement {
    
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

                const register = this.ownerDocument.createElement("h1")
                register.innerText = "Register"
                container.appendChild(register)

                const img = this.ownerDocument.createElement("img")
            img.src="/src/image/Logito.png"
            container.appendChild(img)

            

            const ima = this.ownerDocument.createElement("img")
            img.src="/src/image/counter-strike-2.png"
            ima.className = "banner"
            

            
                const yourname = this.ownerDocument.createElement("but-regis")
                yourname.setAttribute(att.placeholder, "Your name")
                yourname.setAttribute(att.type, "user")
                container.appendChild(yourname)

                const email = this.ownerDocument.createElement("but-regis")
                email.setAttribute(att.placeholder, "Your e-mail")
                email.setAttribute(att.type, "email")
                container.appendChild(email)

                const password = this.ownerDocument.createElement("but-regis")
                password.setAttribute(att.placeholder, "password")
                password.setAttribute(att.type, "password")
                container.appendChild(password)

                const confirmpassword = this.ownerDocument.createElement("but-regis")
                confirmpassword.setAttribute(att.placeholder, "Confirm password")
                confirmpassword.setAttribute(att.type, "password")
                container.appendChild(confirmpassword)

                const button = this.ownerDocument.createElement("btn-account");
                 container.appendChild(button)
                
                this.shadowRoot?.appendChild(container)
                



            }
        }
    }
    
customElements.define("reg-ist", FormReg);