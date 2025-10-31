// array

let fruits = ["apple", "banana", "strawberry" , "mango"]    // strings array

let exoticFruits = ["DragonFruit" , "Papaya"]   // second array 


console.log("the size of fruits array : " + fruits.length)  // array length

const x = fruits.toString()   // converts  array into string  

const y = fruits.at(2)    // fruits[2]   differnet methods same result 

const z = fruits.join(" ")   // replaces comma with space

fruits.pop()    // last element pops out from the array 

fruits.push("orange")   // adds an element to the end of array 

fruits.shift()  // removes first element  // but shifts index to left -1

fruits.unshift("kiwi")   // adds and element from first index   sshift index to right +1 

//  delete fruits[0]   // delete index but a vacant space remains there and also  length remains same 
 

const conactedARR = fruits.concat(exoticFruits)  //creates an  third array preserving the original ones  


const ab = fruits.copyWithin(2,0)    //Copy to index 2, all elements from index 0: 


console.log(ab)









// console.log(fruits.reverse())   
// console.log(fruits.includes("applee"))  

// array index  

// console.log(fruits[0])
// console.log(fruits[2])
// console.log(fruits[fruits.length -1])

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



// console.log("the length of cars array : " + cars.length)

// console.log(cars.reverse())
