// array

let fruits = ["apple", "banana", "Papaya", "strawberry", "mango"]    // strings array

let exoticFruits = ["DragonFruit", "Papaya"]   // second array 

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

//const ab = fruits.copyWithin(2, 0)    //Copy to index 2, all elements from index 0: //applies on original 

// console.log(ab)

// array of arrays

let oldArr = [[2, 4, 6], [1, 3, 5]]    // multidimensional array 

let newArr = oldArr.flat()     // returns a new  single array    // 

// console.log(newArr)

const slice = fruits.slice(1, 3)   // returns a section of an array without changinhg the original 


//const splice =fruits.splice(1,2)   // deletes the section of an original array // return deleted sections of  array 



// search 

// console.log(conactedARR)

// console.log(conactedARR.includes("Papaya"))    // true or false 


// console.log(conactedARR.indexOf("Papaya"))    // index of the elemnent from left side
// console.log(conactedARR.lastIndexOf("Papaya"))     // index of the elemnent from right side





function predicate(value, index, array) {
    return value.length === 9
}

const find11 = conactedARR.find(predicate)


// console.log(find11)




const employees = ["Aamir", "Tabish", "Bilal", "Burhan"]

employees.sort()   // original array changes 
employees.reverse() // original array changes

//const sortEmployess =  employees.toSorted()    // it will created a new sorted array 
//const reverseEmployess =  employees.toReverse()    // it will created a new reversed array 


const findEmployee = employees.find((value) => { return value === "Burhan" })

// console.log(findEmployee)




const numbersArray = [5 , 23  , 17, 25 , 100]



numbersArray.sort()  // numbers will sorted as they are strings // first digit will be compared

numbersArray.sort((a,b)=>{return a- b}) // compare function ascending order

console.log(numbersArray)


numbersArray.forEach((value)=> {console.log(`square of ${value} =`+value * value)})  

// question //

// create a new array which is a squared array of numbersArray

// result [ 25 , 289 , 529 , 625 , 10000]

let squaredArr = []

numbersArray.forEach((value)=>{

    squaredArr.push(value*value)


})

console.log( squaredArr)


// subtarct 5 from each elemnt of numbersArray

let subtractedArr = []

numbersArray.forEach((value)=>{


    subtractedArr.push(value - 5)

    
})

console.log(subtractedArr)



// seperate odd and even  from numbers array 

let evenArr = []

let oddArr = []

numbersArray.forEach((value) =>{

    if (value % 2  === 0){
        evenArr.push(value)
    }else{
        oddArr.push(value)
    }
})

// value/2
console.log(oddArr)

console.log(evenArr)


// take an array and find prime number in that 

// take an array and find 3rd largest number 

// take an array and find 4th smallest number 
 





 
const dice = [3, 1 , 2 , 4 , 6 , 5]

dice.sort((a,b)=>{return 0.5 - Math.random()})    // random sorrt
// console.log("Rolling the Dice :  ....")
// console.log("Result : " + dice[0])



function findMin(arr) {
  return Math.min.apply(null, arr);
}



function findMax(arr) {
  return Math.max.apply(null, arr);
}


// console.log(findMin(numbersArray))










let cars = [
    {
        brand: "toyota",
        age: 5,
        color: "red",
        price: 30000,
        onSale: true,
        negotiable: false
    },

    {
        brand: "suzuki",
        age: 7,
        color: "blue",
        price: 15000,
        onSale: true,
        negotiable: false
    },

    {
        brand: "Nissan",
        age: 8,
        color: "grey",
        price: 25000,
        onSale: true,
        negotiable: true
    },

]



console.log("the length of cars array : " + cars.length)


const findCar = (requestedColor) => {

    const find = cars.find((value) => {
        return value.color === requestedColor
    })

    if (find === undefined) {
        return console.log("Sorry requested car is not aviailable")
    } else {
        return console.log(find)
    }
}
// console.log(findCar("ehite"))



// cars.findIndex((value)=>{ value.color === "red"})


// cars.sort((a,b)=>{return a.price - b.price})   // numeric sort 

// cars.sort((a , b) =>{return a.age - b.age})   // numeric sort 

// object sort on the string property 

//  cars.sort((a,b)=>{
//     let x = a.brand.toLowerCase()
//     let y = b.brand.toLowerCase()

//     if(x<y){return - 1}
//     if(x>y){return 1}
//     return 0

//  })




// console.log( cars)






