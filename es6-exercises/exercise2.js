// Implement function called calculatePrice that simulates named parameters concept. calculatePrice takes 3 params named price, tax and discount, out of which discount is default with 10. 
// Logic to use:
//     taxablePrice = price - (price * (discount / 100))
//     priceWithTax =  taxablePrice + (taxablePrice * (tax / 100));

// Concepts to use:
//     Block scoping
//     Arrow functions
//     Destructuring

calculatePrice = ({ price, tax, discount = 10 }) => {
    const taxablePrice = price - (price * (discount / 100))
    const priceWithTax = taxablePrice + (taxablePrice * (tax / 100));
    return { taxablePrice, priceWithTax };
}

console.log(calculatePrice({ price: 100, tax: 5 }));