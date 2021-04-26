/**
Title: float-max-field.js
Author: Soliman Abdelmalak
Date: 04/25/2021
Description: Export FloatMaxField class to Future Value App.
*/

// Create a FloatMaxField class.
export class FloatMaxField{
    //Create a constructor and supply it with three parameters: name, field, and max.
    constructor(name, field, max) {
     //Set the parameters to class properties
         this.name = name;
         this.field = field;
         this.max = max;
   }
    
    // Create a validate function. 
    validate() {
        let value = parseFloat(this.field);
        return (value < this.max);
    }

    // Create a getMessage() function that return a string message.
    getMessage() {
        return this.name + " must be less than " + this.max + ". You entered " + this.field; 
    }
}