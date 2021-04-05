/**
Title: bill.js
Author: Soliman Abdelmalak
Date: 04/03/2021
Description: Import/Export bill class to the Restaurant App
*/

//Create Bill class with 4 properties _beverages, _appetizers, _mainCourses, and _desserts and assign them an empty array.
export class Bill {
    constructor(_beverages, _appetizers, _mainCourses, _desserts)
    { 
        this._beverages = [];
        this._appetizers = [];
        this._mainCourses = [];
        this._desserts = [];
    }
     //Create an addBeverage() function , push the beverage object to the _beverages array.
    addBeverage(beverage) {
        this._beverages.push(beverage);
    }
     //Create an addAppetizer() function , push the appetizer object to the _appetizers array.
    addAppetizer(appetizer){
        this._appetizers.push(appetizer);
    }
    //Create an addMainCourse() function , push the mainCourse object to the _mainCourses array
    addMainCourse(mainCourse){
        this._mainCourses.push(mainCourse);
    }
    //Create an addDessert() function , push the dessert object to the _desserts array
    addDessert(dessert){
        this._desserts.push(dessert);
    }
    //Create a function named getTotal().
    getTotal() {
     //Creating variable total with value of 0.
     let total = 0;
     // using built-in forEach(), calculate the total using the price field of each object.
     let beverageTotal = this._beverages.forEach(function(beverage) {
        total += parseFloat(beverage.price);
     });
     let appetizerTotal = this._appetizers.forEach(function(appetizer) {
        total += parseFloat(appetizer.price);
     });
     let mainCourseTotal = this._mainCourses.forEach(function(mainCourse) {
        total += parseFloat(mainCourse.price);
     });
     let dessertTotal = this._desserts.forEach(function(dessert) {
        total += parseFloat(dessert.price);
     });
     console.log(`The total is ${total}`);
     //Return the total variable and set its precisions to two decimal places.
     return total.toFixed(2);
    }     
}