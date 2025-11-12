
//task 1
function fullname(FirstName,LastName) {
    if (FirstName || LastName)
        console.log(welcome)
    } else {
    console.log("Invalid name input")
}


// task 2
function calculateTotalCost(Price, Quantity, Taxrate){
    if(Price, Quantity, Taxrate)
        return "Wrong Imput";
        return ( Price * Quantity) * (1+ Taxrate);
console.log(calculateTotalCost)
}

//task 3
function checkEligibility(age, isEmployed) {
    if (age <= 18) {
        return "You have not met the requirement.";
    } else if (age > 18 && isEmployed) {
        return "You have met the requirement.";
    } else {
        return "You are eligible."
    }
}

let userAge = 19;
let userEmployed = false;

console.log(checkEligibility(userAge, userEmployed));

/// task 4 calculater
function calculateTotalCost(price, quantity, taxRate, discount) {

    if (isNaN(price) || isNaN(quantity) || isNaN(taxRate)) {
        return "Invalid input";
    }

    let subtotal = price * quantity;

    if (discount !== undefined) {
        if (isNaN(discount)) {
            return "Invalid input.";
        }
        subtotal = subtotal - discount;
    }

    let totalCost = subtotal * (1 + taxRate);

    return totalCost;
}

console.log(calculateTotalCost(10, 2, 0.1));
console.log(calculateTotalCost(10, 2, 0.1, 5));
console.log(calculateTotalCost("ten", 2, 0.1,));
console.log(calculateTotalCost(10, 2, 0.1, "hi"));