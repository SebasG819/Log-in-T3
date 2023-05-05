import styles from "./section1.css"
import "../export"
import { pdata } from "../../services/Databtn";
import { Attribut } from "../btn/buttons";
import  { attr } from "../butemailandpass/emailandpass";

export class FormLog extends HTMLElement {
    
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
                

                const Login = this.ownerDocument.createElement("h1")
                Login.innerText = "Log In"
                container.appendChild(Login)

                const Check = this.ownerDocument.createElement("h2")
                Check.innerText = "Check your followers' new plays"
                container.appendChild(Check)


                pdata.forEach((dat) => {
                    const buttonsess = this.ownerDocument.createElement("btn-sec");
                    buttonsess.setAttribute(Attribut.btn_img, dat.btn_img)
                    buttonsess.setAttribute(Attribut.name, dat.name)
                    container.appendChild(buttonsess)



                })




        

                const Notregis = this.ownerDocument.createElement("h5")
                Notregis.innerText = "Not registered yet?"
                

                const Notaccount = this.ownerDocument.createElement("h5")
                Notaccount.innerText = "Create an Account"
                

                const ema = this.ownerDocument.createElement("h4")
                ema.innerText = "Email"
                container.appendChild(ema)
                
                const email = this.ownerDocument.createElement("email-pass")
                email.setAttribute(attr.placeholder, "email")
                email.setAttribute(attr.type, "email")
                container.appendChild(email)

                const pass = this.ownerDocument.createElement("h4")
                pass.innerText = "password"
                container.appendChild(pass)

                const password = this.ownerDocument.createElement("email-pass")
                password.setAttribute(attr.placeholder, "password")
                password.setAttribute(attr.type, "password")
                container.appendChild(password)


            
                
                this.shadowRoot?.appendChild(container)
                container.appendChild(Notregis)
                container.appendChild(Notaccount)
                
                



            }
        }
    }
    
customElements.define("form-log", FormLog);
