function multiply (x , y){
    return x*y
}
function calculate(x , y , func , callBack){
    var result = func(x , y)
    callBack(result)
}
function displayResult(res){
    console.log(res)
}
calculate(4 , 5 , multiply , displayResult)