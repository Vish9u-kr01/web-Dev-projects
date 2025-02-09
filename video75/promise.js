console.log("This is a promise ")

let prom1 = new Promise((resolve,reject) => {
    let a = Math.random();
    if(a<0.5){
        reject("No random number is supporting you")
    } else{
  setTimeout( () => {
    console.log("yes i am done")
    resolve("harry")
  },2000);
    }
})

let prom2 = new Promise((resolve,reject) => {
    let a = Math.random();
    if(a<0.5){
        reject("No random number is supporting you 2")
    } else{
  setTimeout( () => {
    console.log("yes i am done 2")
    resolve("harry 2")
  },2000);
    }
})

let prom3 = new Promise((resolve,reject) => {
    let a = Math.random();
    if(a<0.5){
        reject("No random number is supporting you 3")
    } else{
  setTimeout( () => {
    console.log("yes i am done 3")
    resolve("harry 3")
  },2000);
    }
})

// prom1.then((a)=>{
//    console.log(a)
// }).catch((err)=>{
//     console.log(err)
// })

let p4 = Promise.all([prom1,prom2,prom3])
p4.then((a)=>{
    console.log(a)
}).catch(err =>{
    console.log(err)
})



