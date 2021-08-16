let a = 1;
console.log("Top level");
console.log("a = " + a);

// Create new block
{
    let b = 2;
    console.log("Inside block");
    console.log("a = " + a);
    console.log("b = " + b);
}

// We cannot access b here

// Top level
// a = 1
// Inside block
// a = 1
// b = 2