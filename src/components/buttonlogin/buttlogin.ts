// import styles from "./infoinputs.css"

// export enum  attribute{
//     "text"="text",
//     "type"="type",
//      "img" = "img"
// }

// export default class Btnreg extends HTMLElement{
//     text?: string;
//     type?:string
//     img? :string

//     static get observedAttributes(){
//         const attrs: Record<attribute, null> = {
//             text: null,
//             type: null,
//             img : null
//         }
//         return Object.keys(attrs)
//     }

//     attributeChangedCallback(
//         propName:attribute,
//         _:unknown,
//         newValue:string,
//     ){
//         switch (propName) {
//             default:
//                 this[propName] = newValue
//                 break;
//         }
//     }
//     constructor(){
//         super();
//         this.attachShadow({mode:"open"});
//     }

//     connectedCallback(){
//         this.render()
//     }

//     render(){
//         if(this.shadowRoot){ 
//         this.shadowRoot.innerHTML = '';

//         const css = this.ownerDocument.createElement('style')
//         css.innerHTML = styles
//         this.shadowRoot?.appendChild(css)

//         const input = this.ownerDocument.createElement('input');
//         input.placeholder = ${this.text};
//         input.type = ${this.type};

//         this.shadowRoot?.appendChild(input)
//         }
//     }

// }

    
// customElements.define("btn-reg", Btnreg);
