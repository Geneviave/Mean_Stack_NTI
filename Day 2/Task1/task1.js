var userName = window.prompt("Enter your username:")
var password = window.prompt("Enter your password:")
if(userName == false){
    window.alert("UserName is required")
}
else if (password.length < 8){
    window.alert("Password must be at least 8 characters")
}
else{
    console.log(`Your username is ${userName}`)
    console.log(`Your password is ${password}`)
}