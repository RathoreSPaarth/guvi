(function(str){
    for(var i = 0; i<str.length; i++){
        str1 = str[i].split("").reverse().join("")
        if(str1==str[i]){
            console.log(str[i])
        }
    }
    
})

(["abba","aa","paarth"])