console.log("Part A — Strings")
var myName = "Geneviave Medhat"
console.log("1)Num. of characters in " + myName + " is " + myName.length)
var sent = "I am learning JavaScript"
console.log("2)1.UpperCase: " + sent.toUpperCase())
console.log("2)2.LowerCase: " + sent.toLowerCase())
var email = "student@nti.com"
console.log("3)Contains @ ?" + email.includes("@"))
var js = "JavaScript"
console.log("4)The first character of Javascript is " + js.charAt(0) + " and the last character is " + js.charAt(js.length -1))
var txt = "This is a bad day"
console.log("5)The text after replacing bad with good: " + txt.replace("bad" , "good"))
var txt2 = "I love coding"
var splitted_txt2 = txt2.split(" ")
console.log("6)1.Splitted sentence: " + splitted_txt2)
var joined_txt2 = splitted_txt2.join("-")
console.log("6)2.Joined sentence: " + joined_txt2)
var txt3 = "nti egypt training"
var txt4 = txt3.trim().toUpperCase().replace("EGYPT" , "CAIRO")
console.log("7)The text after modification: " + txt4)
/////////////////////////////////////////////////////
console.log("Part B — Numbers & Math")
var st = "45.8"
var num = Number(st)
console.log("8)Real Number: " + num)
var n = 7.6
console.log("9)1.Rounded value: " + Math.round(n))
console.log("9)2.Floor value: " + Math.floor(n))
console.log("9)3.Ceil value: " + Math.ceil(n))
console.log("10)The max of (12,5,28,9) is " + Math.max(12,5,28,9) + " and the min is " + Math.min(12,5,28,9))
// var arr = [12,5,28,9]
// console.log(Math.max(...arr))
// console.log(Math.min(...arr))
var rand = Math.floor(Math.random()*20) + 1
console.log("11)Random Number: " + rand)
var price = 19.4567
console.log("12)Approximated price: " + price.toFixed(2))
var numArr = []
var sum = 0
for(var i = 0 ; i < 5 ; i++){
    numArr.push(Math.floor(Math.random()*50) + 1)
    sum += numArr[i]
}
console.log("13)1.Max: " + Math.max(...numArr))
console.log("13)2.Min: " + Math.min(...numArr))
console.log("13)3.Avg: " + (sum/numArr.length).toFixed(2))
/////////////////////////////////////////////////////
console.log("Part C — Loops")
console.log("14)Numbers from 1 to 20: ")
for(var i = 1 ; i <= 20 ; i++){
    console.log(i)
}
console.log("15)Odd numbers from 1 to 15: ")
for(var i = 1 ; i <= 15 ; i++){
    if(i %2 == 0){
        continue
    }
    console.log(i)
}
console.log("16)CountDown from 10 to 1: ")
var c = 10
while(c >= 1){
    console.log(c)
    c--
}
console.log("17)Each array name: ")
var a = ["Sara" , "Omar" , "Mona" , "Youssef"]
for(var nme of a){
    console.log(nme)
}
console.log("18)Break at 7: ")
for(var i = 1 ; i <= 10 ; i++){
    if( i == 7){
        break
    }
    console.log(i)
}
console.log("19)Multiplication Table: ")
for(var i = 1 ; i <= 3  ; i++){
    for(var k = 1 ; k <= 3 ; k++){
        console.log(i + " * " + k + " = " + i*k)
    }
}
console.log("20)From 1 to 30(except : divisible by 3 & break at 25): ")
for(var i = 1 ; i <= 30 ; i++){
    if(i%3 == 0){
        continue
    }
    if(i == 25){
        break
    }
    console.log(i)
}
/////////////////////////////////////////////////////
console.log("Part D — Mix (Strings + Numbers + Loops)")
console.log("21)Each letter in HELLO: ")
var word = "HELLO"
for(i = 0 ; i < word.length ; i++){
    console.log(word[i])
}
var numbers = [10,20,30,40]
var summation = 0
for(var numb of numbers){
    summation+= numb
}
console.log("22)The sum of (10,20,30,40) is " + summation)
var countA = 0
var sentence = "JavaScript is amazing and awesome"
for( var i = 0 ; i < sentence.length ; i++){
    if(sentence[i] == "a" || sentence[i] == "A"){
        countA ++
    }
}
console.log("23)A or a appear " + countA + " times in the sentence")
console.log("24)Even grades: ")
var grades = [70,85,92,60,77,88]
for(var g of grades){
    if(g %2 == 0){
        console.log(g)
    }
}
console.log("25)Stars pattern: ")
var astrk = 1
for(var i = 0 ; i < 4 ; i++){
    var x = ""
    for(var j = 0 ; j < astrk ; j++){
        x += "* "
    }
    console.log(x)
    astrk++
}
console.log("26)1.Names that start with A or S: ")
var countAS = 0
var students = ["ahmed" , "sara" , "omar" , "laila" , "hassan"]
for(var i = 0 ; i < students.length ; i++){
    students[i] = students[i].toUpperCase()
    if(students[i].startsWith("A") || students[i].startsWith("S")){
        countAS++
        console.log(students[i])
    }
}
console.log("26)2." + countAS + " names matched")