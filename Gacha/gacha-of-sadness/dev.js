// const getSpinFn = require('./getSpin')

// 
// RATE && CARD 
// 

let rateCard = ['Normal 😢', 'Rare 📦', 'SupeRrare 📦🌟']
let itemCard_Normal = [' ']
let itemCard_Rare = ['🍅', '🍇', '🍈', '🍉', '🍊']
let itemCard_SuperRare = ['S🧚', 'SS🧚']

let randomRate1 = Math.floor((Math.random() * 100) + 1);
let randomRate2 = Math.floor((Math.random() * 100) + 1);
let randomRate3 = Math.floor((Math.random() * 5) + 1);

var randomCard_Rare = itemCard_Rare[Math.floor(Math.random()*itemCard_Rare.length)];
var randomCard_SuperRare = itemCard_SuperRare[Math.floor(Math.random()*itemCard_SuperRare.length)];

// 
// FUNCTIONS
// 

function response(rate, item) {
    res1 = rate
    res2 = item
    return {rate , item}
}

// 
// INPUT 
// 

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question('spin ( 1 or 3 ) : ', spin => {
    console.log(`get : ${spin} spin !`, '\n')
    readline.close()
    return getSpin(spin)
})

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