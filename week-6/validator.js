/**
Title: validator.js
Author: Soliman Abdelmalak
Date: 04/25/2021
Description: Export/export Validator.
*/

// Add import statements for RequiredField, FloatField, FloatMinField, FloatMaxField.
import { RequiredField } from "./required-field.js"
import { FloatField } from "./float-field.js"
import { FloatMinField } from "./float-min-field.js"
import { FloatMaxField } from "./float-max-field.js"

// Create two class properties: validators and messages. Assign each of the properties an empty array.
export class Validator {
     validators = [];
     messages = [];
     // Create a class constructor with two parameters: name and field
    constructor(name, field) {
        this.name = name;
        this.field = field;
    }

 /* In the body functions, push a new instance of the
 RequiredField, FloatField, FloatMinField,and FloatMaxField classes to the validators array using the name and field as parameters.*/
    addRequiredField() {
        this.validators.push(new RequiredField(this.name, this.field));
    }
    addRequiredFloatField() {
        this.validators.push(new FloatMaxField(this.name, this.field));
    }

    addFloatMinField(min)
    {
        this.validators.push(new FloatMinField(this.name, this.field, min));
    }

    addFloatMaxField(max)
    {
        this.validators.push(new FloatMaxField(this.name, this.field, max));
    }

    // Create a function named validate().
    validate() {
        for (const validator of this.validators) {
            for (const validator of this.validators) {
                if (!validator.validate()) {
                    this.messages.push(validator.getMessage());
                }
            }
            return this.messages.length == 0;
        }
    }
}