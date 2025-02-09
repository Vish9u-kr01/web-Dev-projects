console.log("harry is a good person")
console.log("rohan is a good person")


setTimeout(() => {
    console.log("I am inside settimeout")

}, 1000)

console.log("The end")

const fn = () => {
    console.log("Nothing")
}

const callback = (arg, fn) => {
    console.log(arg)
    fn()
}

const loadScript = (src, callback) => {
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = callback("This function loaded",fn)
    document.head.append(sc)
}
loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback)

