var userName = window.prompt("Enter your name:")
var birthYear = window.prompt("Enter your birth year:")
var isStudent = window.confirm("Are you a student?")
var age = (new Date().getFullYear()) - birthYear

var category = ""
if (age < 13) {
    category = "Kid"
} else if (age >= 13 && age <= 17) {
    category = "Teen"
} else if (age >= 18 && age <= 59) {
    category = "Adult"
} else {
    category = "Senior"
}
var message = "Hello " + userName + ", you are " + age + " years old.\nCategory: " + category + "."
if (isStudent) {
    message += "\nDon't forget to study hard!"
}
console.log(message)
window.alert(message)
document.getElementById("result").innerText = message