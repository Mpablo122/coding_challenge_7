// Task 1 - Customer Invoice Calculation.
function calculateInvoice(subtotal, taxRate, discount){
    let total = (subtotal +(subtotal * taxRate)) - discount
    console.log(`Total invoice: $${total}`) 
};

calculateInvoice(100,0.08,5);
calculateInvoice(500,0.1,20);

