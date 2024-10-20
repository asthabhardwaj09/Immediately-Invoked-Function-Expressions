// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})(); // when we write two iife it is mendatory to add semicolon


//simple iife
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')