const x = 45

const y = 56



let add = x + y

let subtract = x - y

let divide = x / y

let multiply = x * y





// functions
// they take input then process it and return output


function multiplyAB(a, b) {     // a, b are input parameter

    // processing ......

    return a * b        // returns output which is a  number 
}


let ab = multiplyAB(4, 9)    // using the function 


console.log(ab)    // show the output of ab in terminal 





function concat(a, b) {
    console.log(a + b)     // void function which doesnot return anything
}



let c = concat(3, 7)    // function call back   // 3 + 7 = 10 

concat("hello", "Class")   // concatenated  // chaining helloclass

concat("hello", 45)   // output hello45

console.log(c)    // output is undefined 



// data types in js 

const username = "burhan"    // string
const age = 20   // number
const isStudent = true   // boolean

let lastName    // undefined  or // null

let date = Date.UTC     // date 

const car = {                    // object
    brand: "toyota",      // key : value
    age: 5,
    color: "red",
    price: 10000,
    onSale: true,
    negotiable: false
}


console.log("the color of car is " + car.color)


// array

let fruits = ["apple", "banana", "strawberry" , "mango"]    // strings array

console.log("the size of fruits array : " + fruits.length)
console.log(fruits.reverse())   
console.log(fruits.includes("applee"))  

// array index  

console.log(fruits[0])
console.log(fruits[2])
console.log(fruits[fruits.length -1])

let evenNumbers = [2, 4, 6, 8, 10]      // numbers array

let cars = [
    {
        brand: "toyota",
        age: 5,
        color: "red",
        price: 10000,
        onSale: true,
        negotiable: false
    },

    {
        brand: "suzuki",
        age: 3,
        color: "blue",
        price: 20000,
        onSale: true,
        negotiable: false
    },

      {
        brand: "Nissa3n",
        age: 1,
        color: "grey",
        price: 25000,
        onSale: true,
        negotiable: true
    },

]



console.log("the length of cars array : " + cars.length)

console.log(cars.reverse())
















// console.log(add)

// console.log(subtract)

// console.log(divide)

// console.log(multiply)









