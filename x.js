// PROBLEM 1
// function STARTS
function seerToMon(seer) {
    // cheak if input is not a number
    if (typeof seer != 'number') {
    return 'Please,input a number!!';
    }
    // cheak if input is a negative number
    else if (seer < 0) {
    return 'Please,input a positive number!!'
    }
    //when the customer order nothing
    else if (seer == 0) {
    return 'Sorry,you have not ordered anything!!'
    }
    // when input is a positive number
    else {
    const mon = seer / 40;
    return mon;
    }
    }
    // Function ENDS
    const seer = 20;
    const result = seerToMon(seer);
    console.log(result);
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
    return 'Shoe Quantity must be a positive integer number';
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
    const result2 = totalSales(shirtQuantity, pantQuantity, shoeQuantity);
    console.log(result2);
    // PROBLEM 03
    // function STARTS
    function deliveryCost(tshirtQuantity) {
    const first100TshirtPrice = 100;
    const second100TshirtPrice = 80;
    //if tshirtQuantity is not a number
    if (typeof tshirtQuantity != 'number') {
    return 'Please,enter a number!!';
    }
    //if tshirtQuantity is a negative number
    else if (tshirtQuantity < 0) {
    return 'Please enter a positive number!!';
    }
    //if tshirtQuantity is zero
    else if (tshirtQuantity == 0) {
    return 'Sorry,you have not ordered anything!!';
    }
    //if tshirtQuantity is a float number
    else if (tshirtQuantity % 1 != 0) {
    return "Please, input an integer number!!";
    }
    //when tshirtQuantity is 1 to 100
    else if (tshirtQuantity <= 100) {
    upto100TshirtPrice = tshirtQuantity * 100;
    return upto100TshirtPrice;
    }
    //when tshirtQuantity is 101 to 200
    else if (tshirtQuantity > 100 && tshirtQuantity <= 200) {
    upto100TshirtPrice = first100TshirtPrice * 100;
    upto200TshirtPrice = (tshirtQuantity - 100) * 80;
    const totalPrice = upto100TshirtPrice + upto200TshirtPrice;
    return totalPrice;
    }
    //when tshirtQuantity is greater than 200
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
    const result3 = deliveryCost(tshirtQuantity);
    console.log(result3);
    // PROBLEM 04
    // function STARTS
    function perfectFriend(friends) {
    let fiveCharacterName = 'You have no perfect friend!!';
    if (typeof friends == 'object') {
    for (const friend of friends) {
    if (friend.length == 5) {
    fiveCharacterName = friend;
    break;
    }
    }
    return fiveCharacterName;
    }
    //error handling if there is invalid input
    else {
    return 'Please,Enter your all friends name in an array!!';
    }
    }
    // Function ENDS
    const friends = [12345, 'Oni', true, 'Boni', -1, 'Jonny', 'Moni', 'Kony'];
    const result4 = perfectFriend(friends);
    console.log(result4);