/* Create a business name generator by combining list of adjectives and shop name and another word
Adjectives:
Crazy 
Amazing
Fire 

Shop Name:
Engine
Foods
Garments

Another Word:
Bros
Limited
Hub
*/
let random = Math.random()
let first,second,third 

random = Math.random()
if(random < 0.33){
    first = "crazy"
}
else if(random < 0.66 && random >= 0.33){
    first = "amazing"
}
else if(random < 0.66 && random >=0.33){
    first = "super"
}
else {
    first = "fire"
}

random = Math.random()
if(random < 0.33){
    second = "engine"
}
else if(random < 0.66 && random >= 0.33){
    second = "foods"
}
else if(random < 0.66 && random >=0.33){
    second = "Electronic items"
}
else {
    second = "garments"
}

random = Math.random()
if(random < 0.33){
    third = "bros"
}
else if(random < 0.66 && random >= 0.33){
    third = "limited"
}
else if(random < 0.66 && random >=0.33){
    third = "hub"
}
else {
    third = "point"
}

console.log(`The buissness name is: ${first} ${second} ${third} `)