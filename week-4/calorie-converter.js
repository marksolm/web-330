/**
Title: calorie-converter.js
Author: Soliman Abdelmalak
Date: 04/11/2021
Description: create export static properties.
*/

//Add an import statement to the FoodModel.
import { FoodModel } from "./food-model.js";
//Create a class named CalorieConverter with a static variable called data
export class CalorieConverter {
    static data = [
      //populate it with 6 FoodModel objects
      new FoodModel (1007, "Egg", 78),
      new FoodModel (1008, "Apple", 95),
      new FoodModel (1009, "Hamburger", 354),
      new FoodModel (1010, "Fries", 400),
      new FoodModel (1011, "Banana", 105),
      new FoodModel (1012, "Soda", 150),
    ] // end static composer variable 
 //Create a static function named find with a single string parameter.
     static find(Name){
     //Return data array with the objects matching the parameter string.
     return this.data.filter(FoodModel => FoodModel.name.toLowerCase().includes(Name.toLowerCase()));
    }
}