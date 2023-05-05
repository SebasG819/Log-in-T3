
import "../export"
import  { attr } from "../butemailandpass/emailandpass";


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

                const register = this.ownerDocument.createElement("h1")
                register.innerText = "Register"

            
                const yourname = this.ownerDocument.createElement("but-regis")
                yourname.setAttribute(attr.placeholder, "Your name")
                yourname.setAttribute(attr.type, "user")
                container.appendChild(yourname)

                const email = this.ownerDocument.createElement("but-regis")
                email.setAttribute(attr.placeholder, "Your e-mail")
                email.setAttribute(attr.type, "email")
                container.appendChild(email)

                const password = this.ownerDocument.createElement("but-regis")
                password.setAttribute(attr.placeholder, "password")
                password.setAttribute(attr.type, "password")
                container.appendChild(password)

                const confirmpassword = this.ownerDocument.createElement("but-regis")
                confirmpassword.setAttribute(attr.placeholder, "Confirm password")
                confirmpassword.setAttribute(attr.type, "password")
                container.appendChild(confirmpassword)
                
                
                



            }
        }
    }
    
customElements.define("reg-ist", FormReg);