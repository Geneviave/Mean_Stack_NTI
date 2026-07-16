function greetUser(){
    console.log("Hello, User!")
}
setTimeout(greetUser , 3000)
function countDown(){
    var count = 10
    let timer = setInterval(function(){
        console.log(count)
        count--
        if(count == 0){
            console.log("Time's up!")
            clearInterval(timer)
        }
    } , 1000)
}
countDown()
function modifiedCountDown(){
    var count = 10
    let timer = setInterval(function(){
        console.log(count)
        count--
       } , 1000)
    setTimeout(function(){
        clearInterval(timer)
        console.log("Stopped after 5 seconds")
    }, 5000)
}
modifiedCountDown()
var t = setTimeout(function(){
    console.log("This will be cleared!")
} , 5000)
clearTimeout(t)