var car = {
    brand : "Geely" ,
    model : "Emgrand7" ,
    year : "2015" ,
    color : "silver"
}
console.log("1)Car object: " + car)
console.log("2)1.The brand is " + car.brand)
console.log("2)2.The year is " + car["year"])
car["color"] = "black"
car["price"] = 100000
console.log("3)Updated car object: " + car)
delete car["year"]
console.log("4)Car year after deleting: " + car["year"]) //undefined because it is deleted 
var students = {
    "student-name" : "Sara",
    age : 20
}
console.log("5)The student name is " + students["student-name"])
var book = {
    title : "Oliver Twist" ,
    author: {
        firstName : "Charles" ,
        lastName : "Dickens"
    }
}
console.log("6)The author's last name is " + book.author["lastName"])
var person = {
    name : "Ali" ,
    age : 25 ,
    city : "Cairo"
}
console.log("7)1.All keys: ")
for( var k of Object.keys(person)){
    console.log(k)
}
console.log("7)2.All values: ")
for( var v of Object.values(person)){
    console.log(v)
}
var isFound = person.hasOwnProperty("job")
if (isFound){
    console.log("7)3." + isFound + " : It has the property 'job'")
}else{
    console.log("7)3." + isFound + " : It doesn't have the property 'job'")
}
var settings = {
    theme : "dark",
    lang : "en" 
}
Object.freeze(settings)
settings["theme"] = "light"
settings["fontSize"] = 16
console.log("8)Settings object:" + settings) //it is unchanged because freeze prevents adding , deleting and modifying the object
/////////////////////////////////////////////////////////////
var cities = ["Cairo" , "Alex" , "Luxor" , "Aswan" , "Paris"]
console.log("9)1.The cities array: " + cities)
console.log("9)2.The array length: " + cities.length)
console.log("10)The first city is " + cities[0] + " ,the second city is " + cities[1] + " and the last city is " + cities[cities.length-1])
cities.push("Rome")
console.log("11)1. " + cities)
cities.unshift("Tokyo")
console.log("11)1. " + cities)
cities.pop()
console.log("12)1. " + cities)
cities.shift()
console.log("12)2. " + cities)
var arr = ["HTML" , "CSS" , "JS" , "React"]
console.log("13)1.The index of JS is " + arr.indexOf("JS"))
console.log("13)2.Does python exist? " + arr.includes("Python"))
var items = ["pen" , "book" , "bag"]
console.log("14)Foreach item: ")
items.forEach(function(item , index){
    console.log("The item is " + item + " its index is " + index)
})
var colors = ["red" , "green" , "blue" , "yellow"]
console.log("15)For...of: ")
for( var color of colors){
    if(color == "blue"){
        break
    }
    console.log(color)
}
var abcs = ["A" , "B" , "C"]
abcs.push("D")
abcs.push("E")
abcs.shift()
console.log("16)1.Final array: " + abcs)
console.log("16)2.Array length: " + abcs.length)
/////////////////////////////////////////////////////////////
var fruits = ["apple", "banana", "cherry"]
var fruits2 = fruits.map(function(fruit){
    return fruit.toUpperCase()
})
console.log("17)1.The original: " + fruits)
console.log("17)2.The mapped: " + fruits2)
var numbers = [10, 55, 30, 80, 45, 90]
var filteredNumbers = numbers.filter(function(num){
    if(num > 50){
        return num
    }
})
console.log("18)Filtered: " + filteredNumbers)
var city = ["Cairo", "Giza", "Alex", "Aswan"]
console.log("19)1.First to start with A is " + city.find(function(x){
    return x.startsWith("A")
}))
console.log("19)2.Index of first to start with A is " + city.findIndex(function(x){
    return x.startsWith("A")
}))
var letters = ["a", "b", "c", "d", "e"]
var slicedletters = letters.slice(1 , 4)
console.log("20)1.Original: " + letters)
console.log("20)2.Sliced: " + slicedletters)
var n = ["one", "two", "three", "four", "five"]
var splicedn = n.splice(1,2)
console.log("21)1.Original: " + n)
console.log("21)2.Spliced: " + splicedn) ////////////////////
var arr2 = [40, 100, 1, 5, 25] 
arr2.sort(function (a , b) {
    return a - b
})
console.log("22)Sorted: " + arr2)
var arr3 = [16, 21, 17, 19]
console.log("23)1.Some: " + arr3.some(function(a){
    return a >=18
}))
console.log("23)2.Every: " + arr3.every(function(a){
    return a >=18
}))
var arr4 = [5, 10, 15, 20]
var total = arr4.reduce(function(sum , a) {
    return sum+a
}, 0)
console.log("24)The total is " + total)
/////////////////////////////////////////////////////////////
var stud = [{ name: "Omar", grade: 80 }, { name: "Mona", grade: 90 }, { name: "Ali", grade: 70 }] 
console.log("25)Student names and grades:")
for ( var s of stud){
    console.log("Student Name: " + s.name + " ,Student grade: " + s.grade)
}
var stud2 = stud.filter(function(a){
    return a.grade >=80
}).map(function(a){
    return a.name
})
console.log("26)Students names: " + stud2)
var products = [{name: "book" , price : 50} , {name : "pen" , price : 15} , {name : "pencilCase" , price : 20}]
var total2 = products.reduce(function(acc , x){
    return acc + x.price
} , 0)
console.log("27)Total: " + total2)
var langs = ["js", "html", "css", "js", "react", "js"]
var count = 0
for(var l of langs){
    if(l == "js")
    {
        count++
    }
}
console.log("28) js appears " + count + " times")
var classroom = {
    teacher: "Mr. Ahmed",
    students: ["Sara", "Omar", "Mona", "Ali"]
}
console.log("29)Teacher Namr is " + classroom.teacher + " and the number of students = " 
    + classroom.students.length + " and the name of the last student is " + classroom.students[classroom.students.length-1])
var arr5 = [{ id: 1, title: "Pen", price: 10 }, { id: 2, title: "Book", price: 50 }, { id: 3, title: "Bag", price: 25 }]
var marr5 = arr5.map(function(a){
    return a.title.toUpperCase()
})
var parr5 = arr5.filter(function(a){
    return a.price < 30
})
var s = arr5.reduce(function(acc , a){
    return acc + a.price
} , 0)
console.log("30)1.Titles array: " + marr5)
console.log("30)2.Prices array: " + parr5)
console.log("30)3.Total: " + s)