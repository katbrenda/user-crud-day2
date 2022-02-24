// // TEST DATA

let mexican = [{ id: 1, name: 'carnitas', price: 21 }, { id: 2, name: 'asada', price: 22 }]
let american = [{ id: 1, name: 'burgers', price: 21 }, { id: 2, name: 'pizza rolls', price: 22 }]


// //MAP------------------------------------------------------------Finished
//
// // foods:[{id:number,name:string, price:number},...]
// /// returns array of formatted strings[] (you choose what these look like)
    const about = (foods) => {
        return foods.map ((food) => {
         return `${food.name} is $${food.price}`

        })
    }
    console.log('String:', about(mexican))




//--------------------------------------------------Finished

// // [...]
// // foods:[{id:number,name:string, price:number},...]
// // food: {id:number,name:string, price:number}
// /// returns new array with food add

const addFood1= (foods, food) => {
    return [...foods, food]

 }
 const newFood = addFood1(mexican, {id:3, name:'Taco', price:7})

 console.log(newFood)




//------------------------------------------------------- Finished

// [...]
// foods:[{id:number,name:string, price:number},...]
// id:number,
// name:string,
// price:number}
/// returns new array with food add
// const addFood2 = (foods, id,name,price)=>{
// }

const addFood2= (foods, id,name,price) => {
    return [...foods, {id, name, price}]

 }
 const newFood2 = addFood2(mexican, 3, 'Taco', 7)

 console.log(newFood2)


//---------------------------------------------------------------Finished
//MAP
// foods:[{id:number,name:string, price:number},...]
// id:number,
// price:number}
// / returns new array with the price updated with the id given


const updateFoodPrice = (foods, id, price) => {

    let foods1 = foods.map((food) => {
        if (food.id === id) {
            food.price = price
        }
        return food
    })
    return foods1
}

    console.log(updateFoodPrice(american, 2, 16))





//---------------------------------------------------------------Finished


//MAP
// foods:[{id:number,name:string, price:number},...]
// id:number,
// food:{id:number,name:string, price:number}}
/// returns new array with the food item updated with the id given
// const updateFood1=(foods, id, food)=>{

    const updateFoodName = (foods, id, name) => {

        let foods1 = foods.map((food) => {
            if (food.id === id) {
                food.name = name
            }
            return food
        })
        return foods1
    }
    
        console.log(updateFoodName(american, 2, 'nachos'))




// //  }

//---------------------------------------------------------------Finished

// FILTER
// foods:[{id:number,name:string, price:number},...]
// id:number,
// removes the food with the given the id
// const deleteFood1 = (foods,id)=>{
// }


const deleteFood = (foods, id) => {

    let foods1 = foods.filter((food) => food.id !== id )
    return foods1
}

    console.log(deleteFood(american, 2))






//---------------------------------------------------------------Finished
// FILTER
// foods:[{id:number,name:string, price:number},...]
// price:number,
// removes the food with price over price given
// // const deleteFood2 = (foods,price)=>{}

const deleteFoodByPrice = (foods, price) => {

    let foods1 = foods.filter((food) => !(food.price > price))
    return foods1
}
console.log("something")
    console.log(deleteFoodByPrice(american, 21))