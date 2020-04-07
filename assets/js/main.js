let name = prompt("Пожалуйста, введите свое имя:");
let years = prompt("Введите год вашего рождения:");
let today = new Date();
let todayYear = today.getFullYear();
let quantityYears = (todayYear - years);
let caseYear;
if (quantityYears % 10 >= 2 && quantityYears % 10 <= 4) {
    caseYear = " года";
}  else if (quantityYears >= 5 && quantityYears <= 20) {
    caseYear = " лет";
}  else if (quantityYears % 10 == 1) {
    caseYear = " год";
}  else {
    caseYear = " лет";
}
alert("Привет, " + name + "! Тебе " + quantityYears + caseYear + "!");
