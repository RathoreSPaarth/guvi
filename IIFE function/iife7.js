(function(arr){
    newArr = []
    for(var i=0; i < arr.length; i++){

        if(newArr.indexOf(arr[i]) == -1) {

            newArr.push(arr[i]);

        }

    }
    console.log(newArr)
})

(["paarth","singh","paarth","singh","rathore"])