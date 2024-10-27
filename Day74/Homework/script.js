let Gender = prompt('Please input your gender using M or F');

let MaleOrFemale = (Gender.toLowerCase() === 'm') ? 'მამრობითი' : (Gender.toLowerCase() === 'f') ? 'მდედრობითი' : 'Choose one of the two genders';
                   
alert(MaleOrFemale);

let Age = Number((prompt('Enter your age')) >= 18) ? 'უფლება გაქვს ხმის მიცემაზე' : 'არ გაქვს უფლება ხმის მიცემაზე';
alert(Age);

let OddOrEven = Number((prompt('Enter any number')) % 2 == 0) ? 'Even' : 'Odd';
alert(OddOrEven);

let Temperature = Number((prompt('Enter how many degrees are outside')) > 30) ? 'ცხელა' : 'კარგი ამინდია';
alert(Temperature);

let Salary = Number((prompt('Enter your salary')) >= 1000) ? 'მაღალი შემოსავალია' : 'დაბალი შემოსავალია';
alert(Salary);

let Day = Number(prompt('Enter day of the week (In numbers)'));

let WorkDays = (Day === 1 || Day === 2) ? 'დღეს დასვენებაა' : 'დღეს სამუშაო დღეა';
alert(WorkDays);

let Result = Number(prompt('Result'))

let ResultPass = (Result >= 50) ? 'გაიარე გამოცდა' : 'ვერ გაიარე გამოცდა';
alert(ResultPass);

let Score = Number(prompt('Score'));

let ScoreResult = (Score >= 90) ? 'A' : (Score >= 80) ? 'B' : (Score >= 70) ? 'C' : (Score >= 60) ? 'D' : 'F';
alert(ScoreResult);

let StatusAge = Number(prompt('Enter your age'));
let Status = prompt('Enter your status');

let AgeStatus = (StatusAge >= 18  && StatusAge <= 65 && Status == 'სტუდენტი' || Status == 'დასაქმებული') ? 'აქტიური მომხმარებელი' : (StatusAge < 18 || StatusAge > 65) ? 'არააქტიური მომხმარებელი' : 'არააქტიური მომხმარებელი';
alert(AgeStatus)

let Amount = Number(prompt('Amount of items'));

let AmountD = (Amount >= 10) ? 'ფასდაკლება 20%' : (Amount >= 5) ? 'ფასდაკლება 10%' : 'ფასდაკლება 5%';
alert(AmountD)