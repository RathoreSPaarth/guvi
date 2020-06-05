//string concat
let str1 = 'paarth s'
let str2 = 'rathore'
str2 = str1 + " "+ str2
console.log(str2)

//endswith

let size = str2.length
let ends = str2.split("")
if(ends[size-1]=='e'){
    console.log("true")
}
else
console.log("false")

//char at
let sentence = 'The quick brown fox jumps over the lazy dog.'
let sent = sentence.split("")
let index = 6
console.log(sent[6])

//index of
let colours = "red blue black brown pink green crimson"
colours = colours.split(" ")
let key = 'brown'
let k = 0
for(let i = 0; i<colours.length; i++){
    if(colours[i]==key)
    {
        console.log(i)
        k++
        break
    }
}
if(k==0)
console.log("-1")

//match

let name = "paarth singh rathore"
name.split("")
let result = []
for(let i = 0; i<name.length; i++){
    if(name[i]=='a' || name[i] == 'e' || name[i]=='i' || name[i]=='o' || name[i]=='u'){
        result.push(name[i])
    }
}
console.log(result)

//replace
let myName = "Paarth Singh Rathore"
let mn = myName.split(" ")
for(let i = 0; i<mn.length; i++){
    if(mn[i]=='Singh')
    {
        mn[i] = "S."
    }
}

console.log(mn.join())


//repeat
let ss = "My name is Paarth"
let repeat = 5
for(let i = 0; i<repeat; i++){
    console.log(ss + " ")
}

//
