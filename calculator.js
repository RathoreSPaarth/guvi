class Calculator{

   
    add(x,y){
         return x+y}
     
     sub(x,y){
         return x-y
     }
 
     mul(x,y){
         return x*y
     }
     
     div(x,y){
         return x/y
     }
     Sqrt(x){
         return Math.sqrt(x)
     }
     ceil(x){
         return Math.ceil(x)
     }
     floor(x){
         return Math.floor(x)
     }
 
     mod(x,y){
         return x%y
     }
 
     pow(x,y){
         return Math.pow(x,y)
     }
    } 
 
 let calc
 calc = new Calculator()
 
 console.log(calc.add(4,5))
 console.log(calc.mod(10,3))