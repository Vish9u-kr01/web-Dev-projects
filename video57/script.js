console.log("This is tutorial on loops");

let a = 1;;

for(let i =0;i<6;i++)
    {
    console.log(a+i); 
}

let obj = {
    name : "Vishnu kumar",
    role : "Programmer",
    company : "amazon"
}
for(const key in obj){
    const element = obj[key];
    console.log(key,element);
}

// let i = 0;
// while(i<6){
//     console.log(i);
//     i++;
// }

// let i = 10;
// do{
//     console.log(i);
//     i++;
// }
// while(i<6);