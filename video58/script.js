function f1(name){
    console.log("Hey " + name + " How are you")
    console.log("Hey " + name + " what are you doing today")
    console.log("Hey " + name + " Are u good now")
    console.log("Hey " + name + " what have you done last night")
}
f1("Vishnu")

function sum(a,b,c =8){
    console.log(a,b,c)
    return a+b+c
}
result1 = sum(2,1)
result2 = sum(4,9)
result3 = sum(2,55)

console.log("The sum of these numbers is:",result1)
console.log("The sum of these numbers is:",result2)
console.log("The sum of these numbers is:",result3)


const func1=(x)=>{
    console.log("I am arrow function",x)
}

func1(12)
func1(45)
func1(78)