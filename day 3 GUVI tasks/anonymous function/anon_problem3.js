// anonmous function to return sum of all the elements in an array
var res = function(arr){
   var sum = 0;
    for(var i = 0; i<arr.length; i++){
        sum += arr[i]
    }
    console.log(sum)

}
arr=[1,2,3,4,5]
res(arr)