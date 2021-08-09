// PROBLEM 2

function totalSales(shirtQuantity, pantQuantity, shoeQuantity) {

    // error handling of shirtQuantity
    if (shirtQuantity < 0 || typeof shirtQuantity != 'number' || shirtQuantity % 1 != 0) {
        return 'Shirt Quantity must be a positive integer number';
    }

    // error handling of pantQuantity
    else if (pantQuantity < 0 || typeof pantQuantity != 'number' || pantQuantity % 1 != 0) {
        return 'Pant Quantity must be a positive integer number';
    }

    // error handling of shoeQuantity
    else if (shoeQuantity < 0 || typeof shoeQuantity != 'number' || shoeQuantity % 1 != 0) {
        return 'Shoe Quantity must be a positive integer number'
    }

    //when ordered nothing
    else if (shirtQuantity == 0 && pantQuantity == 0 && shoeQuantity == 0) {
        return 'Sorry,you have not ordered anything';
    }

    else {
        totalShirtPrice = shirtQuantity * 100;
        totalPantPrice = pantQuantity * 200;
        totalShoePrice = shoeQuantity * 500;
        const totalPrice = totalShirtPrice + totalPantPrice + totalShoePrice;
        return totalPrice;
    }

}
// function ENDS

const shirtQuantity = 1;
const pantQuantity = 0;
const shoeQuantity = 2;
const result = totalSales(shirtQuantity, pantQuantity, shoeQuantity);
console.log(result);