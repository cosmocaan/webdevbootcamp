// console.log("Before conditional");
// let random = Math.random();
// if (random < 0.5) {
//     console.log("The number is < 0.5")
//     console.log(random);
// }
// console.log("After conditional");

// const dayOfWeek = prompt("Enter a day").toLowerCase();

// if (dayOfWeek === "monday") {
//     console.log("Tell me why I don't like Mondays.")
// }  else if(dayOfWeek === "saturday") {
//     console.log("I love Saturdays!")
// }  else if(dayOfWeek === "friday") {
//     console.log("Let's get the weekend started!")
// }  else {
//     console.log("Meh")
// }

// 0-5 - free
// 6-10 - Child $10 
// 11-65- Adult $15
// 65+ - Senior $8

// let age = 60;

// 

const password = prompt("Enter a new password");

if (password.length >= 6) {
    if(password.indexOf(' ') === -1) {
        console.log("It's a good password");
    }  else {
        console.log("Password cannot contain spaces")
     } 
    }  else {
    console.log("Password must be 6 or more characters")
}
