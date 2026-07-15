var people = [{ name: "Ahmed", city: "Cairo" },
    { name: "Sara", city: "Alex" },
    { name: "Omar", city: "Cairo" },
    { name: "Mona", city: "Alex" },
    { name: "Ali", city: "Giza" }
];
var categorieCountries = {}
for (var i = 0 ; i < people.length ; i++){
    if(!categorieCountries[people[i].city]){
        categorieCountries[people[i].city] = []
    }
    categorieCountries[people[i].city].push(people[i])
}
console.log(categorieCountries)