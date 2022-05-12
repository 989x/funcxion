// function map(f, a) {
//     let result = []; // Create a new Array
//     let i; // Declare variable
//     for (i = 0; i != a.length; i++)
//       result[i] = f(a[i]);
//     return result;
//   }
//   const f = function(x) {
//      return x * x * x;
//   }
//   let numbers = [0, 1, 2, 5, 10];
//   let cube = map(f,numbers);
//   console.log(cube);


const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  readline.question(`What's your name?`, name => {
    console.log(`Hi ${name}!`);
    readline.close();
  });