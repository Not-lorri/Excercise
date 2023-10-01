// Looping a triangle excersize
function triangle () {
    for (let number = "#"; number.length <= 7; number += "#") {
        console.log(number);
    }
}

// triangle()


// FizzBuzz excersize
function fizzBuzz () {
    for (let i = 0; i <= 100; i++) {

        if (i % 15 == 0) {
            console.log("FizzBuzz");
        }
        else if (i % 3 == 0) {
            console.log("Fizz");
        }
        else if (i % 5 == 0) {
            console.log("Buzz");
        }
        else {
            console.log(i)
        }
    }
}

// fizzBuzz()



// Chessboard 
function chessboard(){
    
    for (let sizeX = 8 ; sizeX  <= 8 ; sizeX++){

    }
}

// chessboard()


// MINIMUM
function minI (x, y) {
    if ( x < y) {
        return x;
    }
    else {
        return y;
    }
}

// console.log(minI(0,10));
// console.log(minI(0,-10));