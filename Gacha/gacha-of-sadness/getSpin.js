// 
// SPIN
// 

function getSpin(spin){
    // 1 TIME
    if (spin == '1') {
    console.log('score :', randomRate1);
        if (randomRate1 <= 4) {
            console.log(response(rateCard[0], itemCard_Normal[0]))
        } 
            if (randomRate1 >= 5 && randomRate1 <= 9 ) {
                console.log(response(rateCard[1], randomCard_Rare))
            } 
                if (randomRate1 == 10) {
                    console.log(response(rateCard[2], randomCard_SuperRare))
                }
    }
    // 3 TIME
    if (spin == '3') {
        console.log('score :', randomRate1);
        if (randomRate1 <= 4) {
            console.log(response(rateCard[0], itemCard_Normal[0]))
        } 
            if (randomRate1 >= 5 && randomRate1 <= 9 ) {
                console.log(response(rateCard[1], randomCard_Rare))
            } 
                if (randomRate1 == 10) {
                    console.log(response(rateCard[2], randomCard_SuperRare))
                }

        console.log('score :', randomRate2);
        if (randomRate2 <= 4) {
            console.log(response(rateCard[0], itemCard_Normal[0]))
        } 
            if (randomRate2 >= 5 && randomRate2 <= 9 ) {
                console.log(response(rateCard[1], randomCard_Rare))
            } 
                if (randomRate2 == 10) {
                    console.log(response(rateCard[2], randomCard_SuperRare))
                }

        console.log('score :', randomRate3);
        if (randomRate3 <= 4) {
            console.log(response(rateCard[0], itemCard_Normal[0]))
        } 
            if (randomRate3 >= 5 && randomRate3 <= 9 ) {
                console.log(response(rateCard[1], randomCard_Rare))
            } 
                if (randomRate3 == 10) {
                    console.log(response(rateCard[2], randomCard_SuperRare))
                }

    }
}

module.exports = { getSpin }

