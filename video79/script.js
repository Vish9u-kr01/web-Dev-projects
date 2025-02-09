let a = prompt("Enter first number")
let b = prompt("Enter  a second number")

// throwing a custom error 
// use this website to refer more errors : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors
if (isNaN(a) || isNaN(b)) {
    throw SyntaxError("Sorry This is not allowed")
}

let sum = parseInt(a) + parseInt(b)

function main(){ 
     let x = 1;
    try {
        console.log("The sum is ", sum * x)
        return true
        
    } catch (error) {
        console.log("Error aa gaya bhai")
        return false
    } 
    finally{
        console.log("files are being closed and db connection is being closed")
    }
  
}

let c = main()