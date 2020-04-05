let name = prompt("Enter your name, please:");
let years = prompt("What year were you born in?");
let today = new Date();
let todayYear = today.getFullYear();
alert("Hello, " + name + "! You are " + (todayYear - years) + " years old.");