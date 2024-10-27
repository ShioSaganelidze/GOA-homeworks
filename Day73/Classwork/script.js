// let Name = prompt('Enter your name')
// let Salary = prompt('Enter your yearly income')
// let CreditHistory = prompt(`Enter your credit history (Bad, Average or Good.)`)
// let Amount = prompt('Enter the amount you want')
// let Age = prompt('Enter your age')

// if (Age < 18) {
//     alert(`${Name}, თქვენი სესხის განცხადუ არ არის დამტკიცებული`)
// }

// else if (Salary < 50000 && CreditHistory == 'Bad') {
//     alert(`${Name}, თქვენი სესხის განცხადუ არ არის დამტკიცებული`)
// }

// else if (Salary >= 50000 && CreditHistory == 'Average' || 'Good') {
//     alert(`${Name}, თქვენი სესხის განცხადი დამტკიცებულია`)
// }

// else if (Amount * 0.3 > Salary) {
//     alert(`${Name}, თქვენი სესხის განცხადუ არ არის დამტკიცებული`)
// }

// let choice = 1;

// switch(choice) {
//     case 1:
//         console.log('Sports');
//         break;
//     case 2:
//         console.log('Business');
//         break;
//     case 3:
//         console.log('Technology');
//         break;
//     default:
//         console.log('Case not found.')
// }

let choice = parseInt(readLine(), 10);

switch(choice) {
    case 1:
        alert('Americano');
        break;
    case 2:
        alert('Espresso');
        break;
    case 3:
        alert('Cappuccino')
        break;
    default:
        alert('Order not found.');
};