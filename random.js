import dogs from './data'
// This line imports the dogs array from data.js. You don't need to do anything with it :)


// This problem set contains the same problems as sorted.js, but in a random order. Use .map(), .reduce(), .filter(), or .forEach() to solve each of the problems below.


// Console.log() the name of each dog
console.log(dogs.map((item) => item.name))
// Create an array of all the dog names
    let dogNames = dogs.map((item) => item.name)
    console.log(dogNames)
// Create an array of dogs who are more than 15 inches tall
    const dogsLongerThan15 = dogs.filter((item) => item.height > 15 )
    console.log(dogsLongerThan15)
// Create an array of dogs whose names start with "R" or "S"
    const rOrS = dogs.filter((item) => item.name[0] == "R" || item.name[0] == "S")
    console.log(rOrS)
// How many spots do all the dogs have between them?
    console.log(dogs.reduce((total, item) => { return total + item.spots},0))
// Create an array of dogs who are more than 12 inches tall
    const longerThan12 = dogs.filter((item) => item.height > 12)
    console.log(longerThan12)
// Create an array of all the dog names in lowercase
    const lowerCaseNames = dogs.map((item) => item.name.toLowerCase())
    console.log(lowerCaseNames)
// How much do all the dogs weigh, in total?
    console.log(dogs.reduce((total, index) => { return total + index.weight},0))
// Create an array of the dogs' ages in dog years (One human year is equal to seven "dog years")
    const dogToHumanYears = dogs.map((item) => item.age / 7)
    console.log(dogToHumanYears)
// How many inches tall are all of the dogs combined?
    console.log(dogs.reduce((total, acc) => { return total + acc.height}, 0 ))
// Create an array of dogs who are three years old or younger
    let ageOfDogs = dogs.filter((item) => item.age <= 3 )
    console.log(ageOfDogs)
// Create an array of dogs whose heights are 15 to 18 inches (inclusive)
    const heightOfDogs15to18 = dogs.filter((item) => item.height >= 15 && item.height <= 18)
    console.log(heightOfDogs15to18)
// It costs one dollar per letter to print name tags for the dogs. How many dollars will it cost to print tags for every dog?
    console.log(dogs.reduce((total, acc) =>{ return total + acc.name.length}, 0))
// Create an array of dogs who have fewer than ten spots
    const lessThan10 = dogs.filter((item) => item.spots < 10)
    console.log(lessThan10)
// What is the total of all the dogs' ages (in human years)?
    console.log(dogToHumanYears.reduce((total, item) => total + item))
// Create an array of dogs who have exactly one spot
    const oneSpot = dogs.filter((item) => item.spots == 1)
    console.log(oneSpot)
// Create an array of all the dog names spelled backwards
    const backwardName = dogs.map((item) => item.name.split('').reverse().join(''))
    console.log(backwardName)
// Add a "gender" property to each dog in the original array and randomly assign "M" or "F"
    function randomNum(){
        return Math.floor(Math.random() * 2) 
    }

    dogs.forEach((item) => { 
        
        if(randomNum() == 0){
          item.Gender = 'M'
        }else{
            item.Gender = 'F'
        }
    })
    

    console.log(randomNum())
// Create an array of all the dog names in uppercase
    const upperCaseNames = dogs.map((item) => item.name.toUpperCase())
    console.log(upperCaseNames)
// Create an array of dogs whose names start with a "P"
    const namesWithP = dogs.filter((item) => { return item.name[0] == "P"})
    console.log(namesWithP)
// Create an array of dogs whose weights are 20 to 30 pounds (inclusive)
    const weight20to30 = dogs.filter((item) => { return item.weight >= 20 && item.weight <= 30})
    console.log(weight20to30)
// Console.log() "<dog> is a good boy/girl!" for each dog based on the gender property you added earlier
    dogs.map((item) => {
    if(item.Gender == 'M'){
        return console.log(`${item.name} is a good boy!`)
    }else{
        return console.log(`${item.name} is a good girl!`)
    }
 })

function color(num){
    num < 5 ? console.log('Red') : console.log('Blue')
}


color(8)


















