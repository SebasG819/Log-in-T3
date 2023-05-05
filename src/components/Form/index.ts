import styles from "./section1.css"
import "../export"
import { pdata } from "../../services/Databtn";
import { Attribut } from "../btn/buttons";
import  { attr } from "../butemailandpass/emailandpass";
import "../buttonlogin/buttlogin"
import "../butemailandpass/emailandpass"




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

                const containerg = this.ownerDocument.createElement("section")
                containerg.className = "big"
                

                const container = this.ownerDocument.createElement("section")
                container.className = "section1"
                const css = this.ownerDocument.createElement("style")
                css.innerHTML = styles
                this.shadowRoot?.appendChild(css)
                containerg.appendChild(container)
                

                const Login = this.ownerDocument.createElement("h1")
                Login.innerText = "Log In"
                container.appendChild(Login)

                const Check = this.ownerDocument.createElement("h2")
                Check.innerText = "Check your followers' new plays"
                container.appendChild(Check)

                const logo = this.ownerDocument.createElement("img")
            logo.src="/src/image/Logito.png"
            logo.className = "logo"
            container.appendChild(logo)


                pdata.forEach((dat) => {
                    const buttonsess = this.ownerDocument.createElement("btn-sec");
                   
                    buttonsess.setAttribute(Attribut.name, dat.name)
                    container.appendChild(buttonsess)



                })

                const ema = this.ownerDocument.createElement("h4")
                ema.innerText = "Email"
                container.appendChild(ema)
                
                const email = this.ownerDocument.createElement("email-pass")
                email.setAttribute(attr.placeholder, "email")
                email.setAttribute(attr.type, "email")
                container.appendChild(email)

                const pass = this.ownerDocument.createElement("h4")
                pass.innerText = "Password"
                container.appendChild(pass)
                

                const password = this.ownerDocument.createElement("email-pass")
                password.setAttribute(attr.placeholder, "Password")
                password.setAttribute(attr.type, "password")
                container.appendChild(password)

            
                const sec = this.ownerDocument.createElement("section")
                sec.className = "section2"
                this.shadowRoot?.appendChild(containerg)
                const button = this.ownerDocument.createElement("my-butlogin");
                 button.className = "btn"
                 container.appendChild(button)

                containerg.appendChild(sec)

                
                
                const banner = this.ownerDocument.createElement("img")
           banner.src="/src/image/BannerLogin.png"
            banner.className = "banner"
            sec.appendChild(banner)



                 const Notregis = this.ownerDocument.createElement("h5")
                 Notregis.innerText = "Not registered yet?"
                 Notregis.className = "Notregis"
                 container.appendChild(Notregis)
                 
 
                 const Notaccount = this.ownerDocument.createElement("h5")
                 Notaccount.innerText = "Create an Account"
                 Notaccount.className = "Notaccount"
                 container.appendChild(Notaccount)
                
            }
        }
    }
    
customElements.define("form-log", FormLog);
