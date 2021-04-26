/**
Title: shopping-cart.js
Author: Soliman Abdelmalak
Date: 04/17/2021
Description: Export ShoppingCart class to the Bob’s Automotive Repair Shop
*/

// Create a ShoppingCart class that has a constructor
export class ShoppingCart {
    constructor() {
        // create a property for products and assign it an empty array. 
        this._products = [];
    }

    //  Create a count  function and return the length of the products array. 
    count() {
        return this._products.length;
    }

    // Create an add function with a single parameter for a product object
    add(product) {
         this._products.push(product);
    }
    // create an iterator and in the body use a for...of statement to loop over the products array
    *[Symbol.iterator]() {
        for (let product of this._products) {
            yield product;
        }
    }
}