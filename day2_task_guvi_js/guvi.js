var library = [
    {
        price : 500,
        title : "javascript",
        reader : [
          { 
              name : "person 1",
              count : 300
            },
        {
            name : "person 2",
            count : 400
        }
    ],
    authorDetails: {
        name : "raj",
        age : 40
    }
},
{
    title : "nodejs",
    price : 600,
    reader : [],
    authorDetails : {
        name : "raj",
        age : 40
    }
}
]


///////////////////
//3A. printing the price of Javascript book in console//
console.log(library[0].price)

///////////////////
//3B. printing the age of nodejs author in console//
console.log(library[1].authorDetails.age)

///////////////////
//3C. Print how many readers in javascript in console
var count = library[0].reader.length
console.log(count)

///////////////////
//3D. Print the count value of person 2 in console//
console.log(library[0].reader[1].count)