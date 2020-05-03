const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
	userInput.push(data);
});
inp.on("close", () => {
    let str1 = userInput[0]
    let str2 = userInput[1]

    str1 = str1.split("")
    str2 = str2.split("")
    
    let k = 0
    var res = ""
    for(var i = 0; i<str1.length; i++){
        for(var j = 0; j<str2.length; j++){
            if(str1[i]==" "){
                continue;
            }
           else if(str1[i]==str2[j]){
                res += str1[i]
                k++
                break;
            }
        }
       
    }
    console.log(res)
     if(k===0)
        console.log("-1")
});



