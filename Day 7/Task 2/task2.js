const fruits = ["apple", "banana", "cherry"]
for(const idx in fruits){
    console.log(idx , " is " , fruits[idx])
}
for(const f of fruits){
    console.log(f)
}
for (const [index, value] of fruits.entries()) {
    console.log(`${index} -> ${value}`);
}
const word = "NTI"
for (const index in word) {
    console.log(index, word[index]);
}
for (const char of word) {
    console.log(char);
} //for in loops over indices or properties in objects but for of loops over the array values
const user = { name: "Ali", age: 25 }; 
// for (const x of user) { 
//     console.log(x); 
// }
for(const [key,value] of Object.entries(user)){
    console.log(`${key} is ${value}`)
}
var numbers = [1, 2, 3, 4, 5, 6]
for (var num of numbers) {
    if (num === 3)
        continue;
    if (num === 6)
        break;
    console.log(num)
} // 1 2 4 5 
//////////////////////////////////////////////////////////
var myMap = new Map()
myMap.set("name", "Ahmed")
myMap.set(100, "ID")
var objKey = { id: 1 }
myMap.set(objKey, "UserObject")
console.log(typeof myMap) // object
console.log(myMap.size) // 3
console.log(myMap.get("name")) // Ahmed
console.log(myMap.has("age")) // false
myMap.delete(100)
console.log(myMap.size) // 3
for (const [key, value] of myMap) {
    console.log(key, value)
}
for (const key of myMap.keys()) {
    console.log(key)
}
for (const value of myMap.values()) {
    console.log(value)
}
//Reasons tu use map
// 1- Keys can be any data type.
// 2- Keeps insertion order.
// 3- Has useful methods like set(), get(), has(), delete(), clear().
myMap.clear()
console.log(myMap.size) // 0
//////////////////////////////////////////////////////////
const mySet = new Set()
mySet.add(10)
mySet.add(21)
mySet.add(2)
mySet.add(3)
mySet.add(2)
mySet.add(10)
console.log(mySet)
console.log(mySet.size) // 4 not 6 because it stores unique values only
console.log(mySet.has(2)) //true
mySet.delete(3)
console.log(mySet.has(3)) // false
for (const value of mySet.values()) {
    console.log(value)
}
for (const entry of mySet.entries()) {
    console.log(entry)
}
//In Set the key and value are identical
const nums = [1, 2, 2, 3, 4, 4, 5]
const uniqueNums = [...new Set(nums)]
console.log(uniqueNums);
//diff. bet. sets and arrays:
// 1- Set stores unique values only
// 2- Set has no indexes
// 3- Array allows duplicates
//////////////////////////////////////////////////////////
const name = "Ahmed"
const age = 25
const person1 = {
    name: name,
    age: age
}
const person2 = {
    name,
    age
}
console.log(person1)
console.log(person2)
const calculator = {
    add(a, b) {
        return a + b
    },
    multiply(a, b) {
        return a * b
    }
}
console.log(calculator.add(5, 3))
console.log(calculator.multiply(5, 3))
const key1 = "email";
const key2 = "phone";
const user2 = {
    [key1]: "user@gmail.com",
    [key2]: "01012345678",
    ["user_" + 99]: "special user"
}
console.log(user2)
function buildPayload(type, value) {
    return {
        type,value,
        createdAt: new Date().toISOString(),
        print() {
            console.log(`${type}: ${value}`)
        },
        [type + "_flag"]: true
    }
}
const payload = buildPayload("order", 12345)
console.log(payload)
payload.print()
//////////////////////////////////////////////////////////
let a = 10; 
let b = a; 
b++; 
console.log(a, b); //10 11
//Primitive values are copied by value
const personA = {name: "SSS",child: {age: 5}};
const personB = personA;
personB.name = "AAA";
console.log(personA.name); //AAA
// Both variables reference the same object
const original = { x: 1, nested: { y: 2 } }
const shallowCopy = {...original}
shallowCopy.x = 100
shallowCopy.nested.y = 999
console.log(original) //original.x = 1 , origninal.nested.y = 999 bec. nested object is shallow copy
console.log(shallowCopy)
const original2 = {x: 1, nested: { y: 2 }}
const copy2 = Object.assign({}, original2)
copy2.nested.y = 999
console.log(original2)
console.log(copy2)
// Object.assign also makes a shallow copy.
const deepSrc = {
    n: 1,
    d: new Date(),
    arr: [1, { k: 2 }],
    set: new Set([1, 2, 3])
};
const deepClone = structuredClone(deepSrc)
deepClone.arr[1].k = 999
console.log(deepSrc); //not affected
console.log(deepClone);
const arr1 = [1, [2, 3]];
const arr3 = [...arr1];
arr1[1][0] = 99;
console.log(arr3[1][0]); //99
const arr4 = structuredClone(arr1)
arr4[1][0] = 500
console.log(arr1)
console.log(arr4)
//////////////////////////////////////////////////////////
const m1 = new Map([["k", { v: 1 }]]);
const m2 = new Map(m1);
m2.get("k").v = 42;
console.log(m1.get("k").v); //42 bec. new Map() creates a shallow copy
const m3 = structuredClone(m1)
m3.get("k").v = 7
console.log(m1.get("k").v) //42
console.log(m3.get("k").v) //7
const ids = [101, 102, 101, 103, 102, 104]
const uniqueIds = [...new Set(ids)]
const idMap = new Map()
for (const id of uniqueIds) {
    idMap.set(id, "available");
}
console.log(idMap.size);
for (const [id, status] of idMap) {
    console.log(id, status);
}
const courseName = "JavaScript"
const duration = "3 Months"
const property = "level"
const course = {
    courseName,
    duration,
    info() {
        console.log(`${this.courseName} - ${this.duration}`)
    }, 
    [property]: "Beginner"
}
course.info()
console.log(typeof course.info)
for (const [key, value] of Object.entries(course)) {
    console.log(key, value)
}
let personAA = { name: "SSSSSSS", son: { age: 5 } };
let personBB = personAA
personBB.name = "AAAAAA"
let personC = structuredClone(personAA)
personC.son.age = 10
console.log(personAA) //personAA.name = AAAAAA , personAA.son.age = 5
console.log(personBB) //personBB.name = AAAAAA , personBB.son.age = 5
console.log(personC) //personC.name = AAAAAA , personC.son.age = 10
// Reason:
// personBB is a reference copy
// personC is a deep copy