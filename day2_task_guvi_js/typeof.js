// enter data type to print its type in the following function
function type (n){
    return typeof(n)
}
var arr = [1,23,4]
console.log(type("str")) //string
console.log(type(2)) // number
console.log(type(true)) // boolean
console.log(type(4.5)) // number
console.log(type(NaN)) // number
console.log(type(arr)) // object