import "../export"
import { pdata } from "../../services/Databtn";
import { emandpassdata } from "../../services/dataemandpass";
import { Attribut } from "../btn/buttons";
import { Attribu } from "../butemailandpass/emailandpass";

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

                const Login = this.ownerDocument.createElement("h1")
                Login.innerText = "Log In"

                const Check = this.ownerDocument.createElement("h2")
                Check.innerText = "Check your followers' new plays"



                
                
                const text = this.ownerDocument.createElement("section")

                const Notregis = this.ownerDocument.createElement("h5")
                Notregis.innerText = "Not registered yet?"

                const Notaccount = this.ownerDocument.createElement("h5")
                Notaccount.innerText = "Create an Account"

                 pdata.forEach((dat) => {
                    const buttonsess = this.ownerDocument.createElement("btn-sec");
                    buttonsess.setAttribute(Attribut.btn_img, dat.btn_img)
                    buttonsess.setAttribute(Attribut.name, dat.name)
                    container.appendChild(buttonsess)



                })

                emandpassdata.forEach((dat) => {
                    const butemaiandpass = this.ownerDocument.createElement("btn-pass");
                    butemaiandpass.setAttribute(Attribu.text, dat.name)
                    butemaiandpass.setAttribute(Attribu.tittle, dat.tittle)
                    container.appendChild(butemaiandpass)



                })

                container.appendChild(Login)
                container.appendChild(Check)
                container.appendChild(text)
                container.appendChild(Notregis)
                container.appendChild(Notaccount)
                this.shadowRoot?.appendChild(container)
                



            }
        }
    }
    
customElements.define("form-log", FormLog);
