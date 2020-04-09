let quantityYears = prompt("Сколько вам лет?");
let caseYear;
let restYears = quantityYears % 10;
if (quantityYears >= 5 && quantityYears <= 20) {
    caseYear = " лет";
}  else if (restYears >= 2 && restYears <= 4) {
    caseYear = " года";
}  else if (quantityYears % 100 === 11) {
    caseYear = " лет";
}  else if (restYears == 1) {
    caseYear = " год";
}  else {
    caseYear = " лет";
}
alert("Привет! Тебе " + quantityYears + caseYear + "!");
