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

// task 4 - Product Shipping Cost Calculation.

let calculateShippingCost = (weight, location, expedited = false) => {
    let baseCost;
    let perPoundRate;

    if (location === "USA") {
        baseCost = 5;
        perPoundRate = 0.5;
    } else if ( location === "Canada"){
        baseCost = 10;
        perPoundRate = 0.7;
    } else {
        return "Invalid Location";
    }
    let totalCost = baseCost + (weight * perPoundRate);

    if(expedited){
        totalCost += 10;
    }
    return `Shipping Cost: $${totalCost}`;
};

console.log(calculateShippingCost(10,"USA",true)); // output should be $20
console.log(calculateShippingCost(5,"Canada",false));// output should be $13

//task 5 Business Loan Interest Calculation

function calculateLoanInterest(principal, rate, years){
    let interest = principal * rate * years
    console.log(`Total interest: $${interest}`)
}

calculateLoanInterest(1000, 0.05, 3); // output should be $150
calculateLoanInterest(5000,0.07,5); // output should be $1750

//Task 6 - Filtering High Value Transactions
let transactions = [500, 1200, 3000, 800, 2200];

let filterHighvalueTransactions = (transactions, filterFunction) => {
    return transactions.filter(filterFunction);
};
console.log(filterHighvalueTransactions(transactions,amount => amount > 1000));
// expected output would be [1200,2200,3000]


