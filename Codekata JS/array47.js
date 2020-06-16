const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
	userInput.push(data);
});
inp.on("close", () => {
	res();

});

function res(){
   let arr,ans = "";
   let obj = {};
   [,arr] = userInput;
   arr = arr.split(" ");
  // console.log(arr)
  for(let i=0; i<arr.length; i++){
      if( obj[`${arr[i]}`]==1)
      obj[`${arr[i]}`]++;
      else
       obj[`${arr[i]}`]=1;
  }
  for(let i=0; i<arr.length; i++){
      if( obj[`${arr[i]}`]==1)
        {
            console.log(arr[i]);
            break;
        }
  }
}
