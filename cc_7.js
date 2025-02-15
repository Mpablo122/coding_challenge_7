// Task 1 - Customer Invoice Calculation.
function calculateInvoice(subtotal, taxRate, discount){
    let total = (subtotal +(subtotal * taxRate)) - discount
    console.log(`Total invoice: $${total}`) 
}; // console log to print the statements and also creating the function

calculateInvoice(100,0.08,5); // making use of the function to generate output
calculateInvoice(500,0.1,20); // making use of the function to generate output

// Task 2 - Employee Hourly Wage Calculation

function calculateHourlyWage(salary, hoursPerWeek){
    let hourly_wage = salary/(hoursPerWeek * 52)
    console.log(`Hourly Wage: $${hourly_wage}`)
}; // console log to print the statements and also creating the function

calculateHourlyWage(52000, 40);// making use of the function to generate output
calculateHourlyWage(75000, 35);// making use of the function to generate an output

//Task 3 customer loyalty discount 

let  calculateLoyaltyDiscount = (amount, years) => {
    let discount;
    if (years>= 5){
        discount = 0.15;
    } else if (years >= 3){
        discount = 0.10;
    } else {
        discount = 0.05;
    }
    let discountedPrice = amount * (1 - discount);
     return `Discounted price: $${discountedPrice.toFixed(2)}`
};

console.log(calculateLoyaltyDiscount(100,6)); // output should be $85
console.log(calculateLoyaltyDiscount(200,2)); // output should be $190


