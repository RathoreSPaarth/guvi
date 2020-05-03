const readline = require('readline');
const inp  = readline.createInterface({
	input: process.stdin
});

const userInput = [];

inp.on("line" ,(data) => {
  userInput.push(data);
});

inp.on("close", () => {
  
  let n = userInput[0]
    n = n.split(" ")
    let n1 = Number(n[0])
    let n2 = Number(n[1])
    
    let arr = userInput[2]
    arr = arr.split(" ")
    
    for(var i = 4; i<=n2+n1; i=i+2){
      let sum = 0
        var k = userInput[i].split(" ")
        var k1 = Number(k[0])
        var k2 = Number(k[1])
        
        for(var j = k1-1; j<=k2-1; j++){
          sum += Number(arr[j])
        }
      
      console.log(sum)
    }
});
