// RATE && CARD 

let rateCard = ['😢 Normal', '📦 Rare', '📦🌟 SupeRrare']
let itemCard_Normal = [' ']
let itemCard_Rare = ['🍅', '🍇', '🍈', '🍉', '🍊']
let itemCard_SuperRare = ['S🧚', 'SS🧚']

let randomRate = Math.floor((Math.random() * 10) + 1);
var randomCard_Rare = itemCard_Rare[Math.floor(Math.random()*itemCard_Rare.length)];
var randomCard_SuperRare = itemCard_SuperRare[Math.floor(Math.random()*itemCard_SuperRare.length)];

// FUNCTIONS

function response(rate, item) {
    res1 = rate
    res2 = item
    return {rate , item}
}

// INPUT

// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// })

// readline.question('name : ', name => {
//     console.log(`Hi ${name}!`)
//     readline.close()
// })

// OUTPUT

let result = console.log('score :', randomRate);

if (randomRate <= 4) {
    console.log(response(rateCard[0], itemCard_Normal[0]))
} 
    if (randomRate >= 5 && randomRate <= 8 ) {
        console.log(response(rateCard[1], randomCard_Rare))
    } 
        if (randomRate >= 9 && randomRate <= 10) {
            console.log(response(rateCard[2], randomCard_SuperRare))
        }