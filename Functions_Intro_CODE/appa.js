function singSong(){
    console.log('DO')
    console.log('RE')
    console.log('MI')
}

// function greet(firstName){
//     console.log(`firstName is ${firstName}`)
//     console.log(`Hi, ${firstName}!`)
// }

// function rant(message){
//     console.log(`${message}, ${message}, ${message}`.toUpperCase())
// }

// DEFINE YOUR FUNCTION:
function rant(message){
    console.log(`${message}`.toUpperCase())
    console.log(`${message}`.toUpperCase())
    console.log(`${message}`.toUpperCase())
}

function greet(firstName, lastName){
    console.log(`Hi, ${firstName} ${lastName[0]}!`)
}

// greet('Cosmo', 'McGillicutty')

function repeat(str, numTimes){
    let result = ''
    for (let i = 0; i < numTimes; i++){
        result += str
    }
    console.log(result)
}

// define isSnakeEyes below:
function isSnakeEyes(num1, num2) {
    if ( num1 === 1 && num2 === 1) {
        console.log('Snake Eyes!')
    } else { console.log('Not Snake Eyes!') }
}

function add(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
      return false
    }
    let sum = x + y
    return sum
  }

// DEFINE YOUR FUNCTION BELOW:
function lastElement(arr) {
    if(arr.length === 0) {
        return null;
    } else {
        return arr[arr.length - 1];
    }
}

function capitalize(x) {
        let capsed = x.charAt(0).toUpperCase() + x.slice(1)
        return capsed
    }

function sumArray(x) {
    return x.reduce((a,b) => a + b,0) 
}

function returnDay(x) {
    if(x == 1){
        return "Monday"
    } 
    else if(x == 2){
        return "Tuesday"
    } 
    else if(x == 3){
        return "Wednesday"
    } 
    else if(x == 4){
        return "Thursday"
    } 
    else if(x == 5){
        return "Friday"
    } 
    else if(x == 6){
        return "Saturday"
    } 
    else if(x == 7){
        return "Sunday"
    } else return null

}



// singSong()
// singSong()
// singSong()
// singSong()
