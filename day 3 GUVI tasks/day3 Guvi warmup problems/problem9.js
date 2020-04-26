function addProperty(obj,key){
    obj[key] = "true"
    console.log(obj)
}

obj = {}
addProperty(obj,"myProperty")

// obj = {
//     myProperty : 'true'
// }
var key = "myProperty"
function removeProperty(obj,key){
    obj[key] = undefined
    console.log(obj[key])
}

removeProperty(obj,"myProperty")