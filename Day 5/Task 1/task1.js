var items = []
function addNewItem(item){
    items.push(item)
}
function readItems(){
    items.forEach(function(i){
    console.log(i)
    })
}
function modifyItems(index , newItem){
    items[index] = newItem
}
function deleteItem(index){
    items.splice(index , 1)
}
addNewItem("bag")
addNewItem("ball")
addNewItem("pen")
readItems()
modifyItems(0 , "pencil")
readItems()
deleteItem(0)
readItems()