

const a = 65    // number 
const b = 56    // number
const username = "Maisa"   // string 



console.log("Welocme", username)
console.log(a + b)


let x     // defining of a variable

console.log("the value of x before assigning", x)


if (a > b) {

    x = "hello Maisa a is greater than b "

} else {
    x = "hello Maisa b is greater than a "
}



console.log("the value of X", x)


// Data types 

// number 
// string 
// bool
// array 
// object
// undefined
// null
// date


const car = {
    brand: "toyota",
    color: "red",
    model: "supra",
    make: 1999
}



const car2 = {
    brand: "Nissan",
    color: "grey",
    model: "GTR",
    make: 2001
}

console.log("the color of second car is ", car2.color)


const fruits = ["apple", "mango", "banana"]
const vegetables = ["raddish", "tomato", "potato"]
const evenNumbers = [2, 4, 6, 8, 10]
const SimpleCarsArr = ["toyota"  , "nissan"  , "suzuki" , "honda"]

const cars = [
    {
        brand: "toyota",
        color: "red",
        model: "supra",
        make: 1999
    },
    {
        brand: "Nissan",
        color: "grey",
        model: "GTR",
        make: 2001
    }

]



const currentDate = new Date(Date.now()+19800000)

console.log("the date is " , currentDate)



function returnMultiply (a , b ){

    return a * b 
}

function multiply (a, b ) {

 console.log(a *b )
}


multiply(8 , 7)



// const multiplication = returnMultiply(7, 9)

// console.log(multiplication)


function greeting (time){

    if(time > 12){
        console.log("Good After noon !")
    }


}



// a function which takes time from your system and greet u 
// good morning . good after noon or good evening based on the time of your system

