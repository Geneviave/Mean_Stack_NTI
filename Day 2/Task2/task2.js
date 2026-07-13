var ename = window.prompt("Enter your name:")
var age = window.prompt("Enter your age:")
var yearsOfExperience = +(window.prompt("Enter your years of experience:"))
var selfRating = +(window.prompt("Enter your self-rating (from 1 to 10):"))
if(selfRating < 1 || selfRating > 10){
    window.alert("Invalid self-rating")
}

var jobCat = ""
if(yearsOfExperience < 2){
    jobCat = "Junior"
}else if (yearsOfExperience >= 2 && yearsOfExperience < 5){
    jobCat = "Mid-Level"
}else if(yearsOfExperience >= 5 && yearsOfExperience < 10){
    jobCat = "Senior"
}else if(yearsOfExperience >= 10){
    jobCat = "Expert"
}
console.log("Job Category is " + jobCat)
window.alert("Job Category is " + jobCat)
document.getElementById("jobCategory").innerText = "Job Category is " + jobCat

var performanceLevel = ""
switch(true){
    case selfRating >= 9 :
        performanceLevel = "Excellent" 
        break
    case selfRating >= 7:
        performanceLevel = "Good"
        break
    case selfRating >= 5:
        performanceLevel = "Average"
        break
    case selfRating < 5:
        performanceLevel = "Needs Improvement"
        break
    default:
        performanceLevel = "Invalid"
}
console.log("Performance Level is " + performanceLevel)
window.alert("Performance Level is " + performanceLevel)
document.getElementById("performance").innerText = "Performance Level is " + performanceLevel

var baseSalary = 10000
var bonus = 0
if(yearsOfExperience >= 0 && yearsOfExperience <= 2){
    bonus = baseSalary*0.1
}else if(yearsOfExperience >= 3 && yearsOfExperience <= 5){
    bonus = baseSalary*0.15
}else{
    bonus = baseSalary*0.2
}
var salary = baseSalary + bonus
console.log("Your Salary = " + salary)
window.alert("Your Salary = " + salary)
document.getElementById("salary").innerText = "Your Salary = " + salary

var hour = new Date().getHours()
var shift = ""
if(hour >= 9 && hour < 18){
    shift = "day shift"
}else{
    shift = "night shift"
}
console.log(shift)
window.alert(shift)
document.getElementById("shift").innerText = shift

function report(){
    document.getElementById("report").innerHTML = "<h3>FINAL REPORT</h3>" +
    "Name: " + ename + "<br>" +
    "Age: " + age + "<br>" +
    "Experience: " + yearsOfExperience + " years<br>" +
    "Job Category: " + jobCat + "<br>" +
    "Performance: " + performanceLevel + "<br>" +
    "Final Salary: " + salary + "<br>" +
    "Shift: " + shift;
}