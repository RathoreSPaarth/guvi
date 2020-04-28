var res = (arr)=>{
    for(var i = 0; i<arr.length; i++){
    var count = 0;
    for(var j = 2; j<=arr[i]/2; j++){
        if(arr[i]%j==0){
            count++
            break
        }

    }

    if(arr[i]==2 || count==0){
        console.log(arr[i])
    }
}
}
res([2,3,4,5,6,7])

