/**
Title: float-field.js
Author: Soliman Abdelmalak
Date: 04/25/2021
Description: Export FloatField class to Future Value App.
*/
// Create a FloatMinField class.
export class FloatField {
    //Create a constructor and supply it with two parameters: name and field
    constructor(name, field) {
     //Set the parameters to class properties
         this.name = name;
         this.field = field;
    }
    //Create a validate function.
    validate() {
        let nanValues = parseFloat(this.field);
        return !isNaN(nanValues)
    }
    // Create a getMessage() function that return a string message.
    getMessage() {
        return this.name + " must be a float value. You entered " + this.field; 
    }
}
