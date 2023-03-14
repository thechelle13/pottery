//Define a function named buyClay
const buyClay = () => {
    const clay = {}
    return clay
}
const newClay = buyClay()


const makePottery = (newClay) => {
    newClay.shape = "Bowl"
    return newClay
}
makePottery(newClay)

// Define a function named makePottery. You need to pass it the empty object that buyClay produced, so it needs a single parameter to capture that value and use it.

// The function should perform the task of adding a new property named shape, and its value should be "Bowl". The function should then return the object after the new property was added.

const bisqueFire = () => {
    newClay.readyForGlazing = true
    return newClay
}
bisqueFire(newClay)

// Define a function named bisqueFire. You need to give it the object that makePottery produced, so it needs a single parameter to capture that value and use it.

// The function should perform the task of adding a new property named readyForGlazing, and its value should be true. The function should then return the object after the new property was added.

const glazePottery = ( ) => {
    newClay.glazing = "Midnight Blue"
    return newClay
}
glazePottery(newClay)
console.log(newClay)

//const potteryObject = buyClay()
// insert output and check if ready

// Define a function named glazePottery. You need to give it the object that bisqueFire produced, so it needs a single parameter to capture that value and use it.

// The function should check if the pottery has been bisque fired already and is ready for glazing. If it has not, you should log the following message to the console.
// "Make sure you bisque fire the pottery before you glaze it."

// If the pottery has been bisque fired, the function should perform the task of adding a new property named glazing, and its value should be "Midnight Blue". The function should then return the object after the new property was added.

// Define a function named finalFiring. You need to give it the object that glazePottery produced, so it needs a parameter to capture that value and use it. It also needs to capture the temperature of the kiln, so it needs two parameters.
const finalFiring = (temperature) => {
    if (temperature > 1200) {
        newClay.cracked = true
    }
    else {
        newClay.cracked = false
    } 
    return newClay
}
//const glazedPottery = newClay()

const firedPottery1200 = finalFiring(1200)
console.log(firedPottery1200)

// const firedPottery1200 = finalFiring(glazedPottery, 1200)
// console.log(firedPottery1200)


// Define a function named finalFiring. You need to give it the object that glazePottery produced, so it needs a parameter to capture that value and use it. It also needs to capture the temperature of the kiln, so it needs two parameters.

// The function should perform the task of adding a new property named cracked, and its value depend on the value of the temperature parameter. If that value is higher than 1200, then the value of the cracked property must be true. If the value is 1200, or less, the value should be false.



