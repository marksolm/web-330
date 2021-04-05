/**
Title: main-course.js
Author: Soliman Abdelmalak
Date: 04/03/2021
Description: Import/Export MainCourse class to the Restaurant App
*/

//Adding an import statement for the product.js.
import {Product} from "./product.js";

//Inherit the base classes properties by referencing the extends keyword.
export class MainCourse extends Product {
    constructor(name, price)
    {
        super(name, price);
    }
}
