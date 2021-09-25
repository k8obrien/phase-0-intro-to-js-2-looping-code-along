guests = ["Lisa", "Kaitlin", "Jan"];
function writeCards(guests, event = 'surprise'){
    let thankYou = [];
    for (let i = 0; i < guests.length; i++){
         let element = (`Thank you, ${guests[i]}, for the wonderful ${event} gift!`);
         thankYou.push(element);
    }
    return thankYou;
}

function countDown(integer = 4){
    while (integer >= 0){
        console.log(integer);
        integer--;
    }
    return integer;
}
