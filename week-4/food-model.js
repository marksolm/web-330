/**
Title: food-model.js
Author: Soliman Abdelmalak
Date: 04/11/2021
Description: Export the FoodModel class with a constructor to calorie App
*/

//Create a class named FoodModel with constructor that has three parameters.
export class FoodModel {
    constructor(id, name, calories){
          this.id = id;
          this.name = name;
          this.calories = calories;
    }
} 