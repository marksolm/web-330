/**
Title: beverage.js
Author: Soliman Abdelmalak
Date: 04/03/2021
Description: Import/Export beverage class to the Restaurant App
*/
//Adding an import statement for the product.js.
import { Product } from "./product.js";
//Inherit the base classes properties by referencing the extends keyword.
export class Beverage extends Product
{
    constructor(name, price)
    {
        super(name, price);
    }
}
