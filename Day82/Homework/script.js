let number = prompt('Enter a number: ')
let list = []

if (number % 3 == 0 && number % 5 == 0) {
    list.push('Fi')
}

else if (number % 3 == 0) {
    list.push('Fizz')
} 

else if (number % 5 == 0) {
    list.push('Buzz')
}

alert(list)