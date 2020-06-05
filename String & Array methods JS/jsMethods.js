const companies = [
    {name: "Company One", category: "Finance", start: 1981, end: 2003},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];
  
  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

  //foreach
  console.log("------------forEach method----------------")
  companies.forEach((Company)=>{
      console.log(Company)
  })
console.log("-------------forEach using Loops---------------")
  for(let i = 0; i<companies.length; i++){
      console.log(companies[i])
  }

 //filter
  console.log("-------------Filter Using loops---------------")
  canVote = [];
  for(let i = 0; i<ages.length; i++){
      if(ages[i]>=18){
          canVote.push(ages[i])
      }
  }

  console.log(canVote)

  console.log("---------------Filter method-------------")
  const canDrive = ages.filter((age)=>{
      if(age>=21)
      return true
  })

  console.log(canDrive)

  console.log("---------------map using for loop-------------")

  let y = 0
  for(let k = 0; k<companies.length; k++){
      let res = companies[k].name + ` [${y}],`
      console.log(res)
      y++
  }

  console.log("---------------map using methods-------------")
let i = 0;
  const serial = companies.map(function (xx){
    i++
    return `${xx.name} [${i}]` 

  })

  console.log(serial)

let num1 = [1,2,3,4,5]
let num2 = [11,22,33,44,55]

console.log(num1.concat(num2))

let newNum = [...num1,...num2]
console.log(newNum)

console.log(Array.from('paarth'))
let arr = ['paarth','singh','rathore']
console.log(Array.from(arr))

let arr1 = 'paarth'
console.log(arr1.split(""))

console.log(Array.of(1,2,3,'paarth','singh','rathore'))
let arrayof = [1,2,3,'paarth']
console.log(arrayof)

let price = [200,250,100,800,1000,2140]
function lessThan(pr){
    if(pr<3000)
    return true
}

console.log(price.every(lessThan))
let b = 0;
for(let i = 0; i<price.length; i++){
    if(price[i]>2000)
    {
        b++;
    }
    else
    continue
}
if(b==0)
console.log("true")
else
console.log("false")

let days = [4,6,11,3,9,1]
console.log(days.fill(5,2))
let days1 = [4,6,11,3,9,1]
days1[2] = 5
days1[3] = 5
days1[4] = 5
days1[5] = 5
console.log(days1)


let numbers1 = [1,2,3,4,5,6]
let resFind = numbers1.find(function(ee){
    if(ee>4)
    return true
})

console.log(resFind)
let val = 4
for(let i = 0; i<numbers1.length; i++){
    if(numbers1[i]>val)
    {
        console.log(numbers1[i])
        break
    }
}

//10 till now
//11th
let findIndex = numbers1.findIndex(function (ee){
    if(ee>3)
    return true
})
console.log(findIndex)

for(let i = 0; i<numbers1.length; i++){
    if(numbers1[i]>3){
        console.log(i)
        break
    }
}

//12th

const avengers = ['hulk','thor','ironman','spiderman']
console.log(avengers.indexOf('spiderman'))

for(let i = 0; i<avengers.length; i++){
    if(avengers[i]=='spiderman')
    console.log(i)
}

//13th

const animals = ['ant', 'tiger', 'dog', 'duck', 'cat'];
console.log(animals.slice(2, 4));

let start = 2;
let end = 4;
let slice = []
for(let i = start; i<end; i++){
    
    slice.push(animals[i])
}
console.log(slice)

//14th

let odd = [5,7,9,2,4,6]
let checkOdd = (od)=>od%2===1

console.log(odd.some(checkOdd))

for(let i = 0; i<odd.length; i++){
    if(odd[i]%2==1)
    {
        console.log("true")
        break
    }
}

//15th
let country = ['india','usa','austria','sri lanka','nepal']
console.log(country.reverse())
let reverseArray = []
for(let i = country.length-1; i>=0; i--){
    reverseArray.push(country[i])
}
console.log(reverseArray)
