let age = 31;

if (age <= 12) {
    console.log("Child");
}

else if (age <= 19) {
    console.log("Teenager");
}

else if (age <= 64) {
    console.log("Adult");
}

else {
    console.log("Senior");
}

//#################################

let temperature = 19;

if (temperature <= 0) {
    console.log("It's freezing outside!");
}

else if (temperature <= 20) {
    console.log("It's chilly. wear a jacket.");
}

else if (temperature <= 30) {
    console.log("It's warm. Light clothing is fine.");
}

else {
    console.log("It's hot. Stay hydrated!");
}

//#################################

let number = 15;

if (number % 3 === 0 && number % 5 === 0) {
    console.log("FizzBuzz");
}

else if (number % 3 == 0) {
    console.log("Fizz")
}

else if (number % 5 == 0) {
    console.log("Buzz")
}

else {
    console.log(number)
}