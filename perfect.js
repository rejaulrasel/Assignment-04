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
const result = perfectFriend(friends);
console.log(result);