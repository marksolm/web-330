/**
Title: cart-component.js
Author: Soliman Abdelmalak
Date: 04/17/2021
Description: Export CartComponent class to the Bob’s Automotive Repair Shop
*/
// creating a CartComponent class with  a constructor and call super() function
export class CartComponent extends HTMLElement {
    constructor() {
        super();
   }

     // Adding a connectedCallback()  and set the innerHTML to a string for the font-awesome shopping-cart icon
    connectedCallback() {
         this.innerHTML = 
         `<i id="cartIcon" class="fa fa-shopping-cart"></i> (<span id="cart-count"></span>)`;
    }
}
   // call the customElements.define() function and pass-in the string value cart-component and the CartComponent class.
    customElements.define("cart-component", CartComponent);  