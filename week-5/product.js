/**
Title: product.js
Author: Soliman Abdelmalak
Date: 04/17/2021
Description: Export product class to the Bob’s Automotive Repair Shop
*/

// Product class with a constructor and two parameters: name and price.
export class Product
{
    constructor(name, price) {
            this.name = name;
            this.price = price;
            this.id = Math.random().toString(16).slice(2);
   }
}