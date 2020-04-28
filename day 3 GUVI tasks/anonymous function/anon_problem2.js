//anonymous function to convert all the strings in an array to upper case
var res = function(arr){
    for(var i = 0; i<arr.length; i++){
        console.log(arr[i].toUpperCase()) 
    }
}

arr = ["paarth","singh","rathore"]
res(arr)