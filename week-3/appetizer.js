/**
Title: appetizer.js
Author: Soliman Abdelmalak
Date: 04/03/2021
Description: Import/Export Appetizer class to the Restaurant App
*/
//Adding an import statement for the product.js.
import { Product } from "./product.js";

//Inherit the base classes properties by referencing the extends keyword.
export class Appetizer extends Product {
    constructor(name, price)
    {
        super(name, price);
    }
}

