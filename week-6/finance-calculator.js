/**
Title: finance-calculator.js
Author: Soliman Abdelmalak
Date: 04/25/2021
Description: Export FinanceCalculator class to Future Value App.
*/

// Create a FinanceCalculator class.
export class FinanceCalculator {
    //Create a static property named MONTHS_IN_YEAR and assign it a default value of 12.
    static MONTHS_IN_YEAR = 12;
    //Create a static function named calculateFutureValue with three parameters:monthlyPayment, rate, and years.
    static calculateFutureValue(monthlyPayment, rate, years) {
        let months = years * FinanceCalculator.MONTHS_IN_YEAR;
        let interestRate = 1 + rate / 100;
        let presentValue = monthlyPayment * months;
        let futureValue = presentValue * (Math.pow(interestRate, months));
        // Return the futureValue and set the precision to two decimal places.
        return futureValue.toFixed(2);
    }

    // Create a convertToCurrency static function with a single parameter named field.
    static convertToCurrency(field) {
        let currencyFormatter = new Intl.NumberFormat('en-US', { 
            style: 'currency',
            currency: 'USD' 
        });
        return currencyFormatter.format(field);
    }
}