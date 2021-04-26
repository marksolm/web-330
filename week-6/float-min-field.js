/**
Title: float-min-field.js
Author: Soliman Abdelmalak
Date: 04/25/2021
Description: Export FloatMaxField class to Future Value App.
*/
// Create a FloatMinField class. 
export class FloatMinField {
    //Create a constructor and supply it three parameters: name, field, and min.
    constructor(name, field, min) {
         this.name = name;
         this.field = field;
         this.min = min;
    }
    
    // Create a validate function.
    validate() {
        let value = parseFloat(this.field);
        return (value > this.min);
    }

    // Create a getMessage() function that return a string message.
    getMessage() {
        return this.name + " should be more than " + this.min + ". You entered " + this.field
    }
}