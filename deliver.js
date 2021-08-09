// PROBLEM 03

// function STARTS
function deliveryCost(tshirtQuantity) {

    const first100TshirtPrice = 100;
    const second100TshirtPrice = 80;
    if (typeof tshirtQuantity != 'number') {
        return 'Please,enter a number!!';
    }
    else if (tshirtQuantity < 0) {
        return 'Please enter a positive number!!';
    }

    else if (tshirtQuantity == 0) {
        return 'Sorry,you have not ordered anything!!'
    }

    else if (tshirtQuantity % 1 != 0) {
        return "Please, input an integer number!!";
    }

    else if (tshirtQuantity <= 100) {
        upto100TshirtPrice = tshirtQuantity * 100;
        return upto100TshirtPrice;
    }
    else if (tshirtQuantity > 100 && tshirtQuantity <= 200) {
        upto100TshirtPrice = first100TshirtPrice * 100;
        upto200TshirtPrice = (tshirtQuantity - 100) * 80;
        const totalPrice = upto100TshirtPrice + upto200TshirtPrice;
        return totalPrice;

    }
    else {
        upto100TshirtPrice = first100TshirtPrice * 100;
        upto200TshirtPrice = second100TshirtPrice * 100;
        restTshirtPrice = (tshirtQuantity - 200) * 50;
        totalPrice = upto100TshirtPrice + upto200TshirtPrice + restTshirtPrice;
        return totalPrice;

    }
}
// function ENDS

const tshirtQuantity = 201;
const result = deliveryCost(tshirtQuantity);
console.log(result);