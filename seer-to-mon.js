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
    else if(seer == 0){
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
