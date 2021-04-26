/**
Title: required-field.js
Author: Soliman Abdelmalak
Date: 04/25/2021
Description: Export RequiredField class to Future Value App.
*/

// Create a RequiredField class.
export class RequiredField {
    constructor(name, field) {
       // Set the parameters to class properties.
            this.name = name;
            this.field = field;
   }

    // Create a validate function which will return true if this.field is a string value and false if not.
    validate() {
        let valid =  Boolean(this.field)
        if (valid){
            valid = Boolean(this.field.trim());
        }
        return valid;
        
    }

    // Create a getMessage() function that return a string message.
    getMessage() {
        return this.name + " is a required field."; 
    }
}