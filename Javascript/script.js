console.log("Hazel Patel")

let a=18
let b=12
let c=a+b
console.log("Sum=" +c)
console.log(typeof(NaN))

let age=25
let newAge=++age
console.log(age)
console.log(newAge)
console.log(typeof(NaN))

let age1=18
let newAge1=age1++
console.log(age1)
console.log(newAge1)
console.log(typeof(NaN))

let age2=12
let newAge2=--age2
console.log(age2)
console.log(newAge2)
console.log(typeof(NaN))

let age3=15
let newAge3=age3--
console.log(age3)
console.log(newAge3)
console.log(typeof(NaN))

let d=16
let e=40
let f=d+e
console.log('Sum=' +f)

let h=2
let i=10
let j=h/i
console.log('Division=' /j)

let age4=20
if (age4>=18) {
    console.log("You can vote")
}
else{
    console.log("You can't vote")
}

let num=9
if (num%2!=0) {
    console.log("num is odd")
} else if (num==0) {
    console.log("num is zero")
} else {
    console.log("num is even")   
}

let year=2016
if (year%4!=0) {
    console.log("year is odd")
} else {
    console.log("year is even")
}

let a1=12
let a2=9
let a3=18
if ((a1>a2)&&(a1>a3)) {
    console.log("a1 is greater than a2 and a3")
} else if ((a2>a1)&&(a2>a3)) {
    console.log("a2 is greater than a1 and a3")
} else{
    console.log("a3 is greater than a1 and a2")   
}

let n="Hazel Patel"
console.log(typeof(n))
console.log(n)
console.log(n.length)
console.log(n[10])

let day=0
switch (day) {
    case 0:
        console.log("Sunday")
        break;
    case 1:
        console.log("Monday")
        break;
    case 2:
        console.log("Tuesday")
        break;
    case 3:
        console.log("Wednesday")
        break;
    case 4:
        console.log("Thursday")
        break;
    case 5:
        console.log("Friday")
        break;
    case 6:
        console.log("Satday")
        break;
    default:
        console.log("invalid")        
}

let color='green'
switch (color) {
    case 'red':
        console.log("Stop")
        break;
    case 'yellow':
        console.log("Watch")
        break;
    case 'green':
        console.log("Go")
        break;
    default:
        console.log("Invalid")
}

for (let n1 = 0; n1 <=10; n1++) {
    console.log(n1);    
}

for (let n2 = 2; n2<=20; n2+=2) {
    console.log(n2)
}

let n3=0;
while (n3<10){
    n3++
    if (n3==2) {
        continue;
    }
     console.log(n3)
}

for (let i = 1; i <= 10; i++) {
  const result = 5 * i;
  console.log("5 x " + i + " = " + result);
}

let str = "          Welcome   to KJIT  "
console.log(str)
console.log(str.trim())
console.log(str.indexOf("to"))
console.log(str.trim().toUpperCase())

let str6="Hazel Patel"
console.log(str6.toUpperCase())
console.log(str6.toLowerCase())
console.log(str6.indexOf("Patel"))

let str2="I am talented girl"
console.log(str2.slice(14))
console.log(str2.slice(5,11))
let str3="I am good girl"
console.log(str2.replace("talented", "good"))

let fruit="Kiwi"
console.log(fruit.repeat(5))

let students=["ABC","XYZ","PQR","HVP"]
console.log(students[2])

let info=["Hazel","Jahanvi","Hetvi","Priya"]
console.log(typeof(info))
console.log(info[3][2])
console.log(info[0]="Riya")
console.log(info)
console.log(info.push("Hazel"))
console.log(info)

let colour=["red","blue","green"]
console.log(colour.length)
console.log(colour[0]="black")
console.log(colour)

let info1=["Ramesh",30,8.6,"vadodara","true"]
console.log(info1.length)
console.log(info1)

let nums=[18,12,17,11,29]
console.log(nums)
nums.reverse()
console.log(nums)
console.log(nums.slice())
console.log(nums.slice(3))
console.log(nums.slice(2,5))

let letter=["black", "blue", "white"]
console.log(letter.slice(-1))


let pricolor = ["Red", "Blue", "Green"]
console.log(pricolor[2])
console.log(pricolor[1] [1])

let name0= "hazel"
console.log(typeof(name0))
console.log(name0[0])

let arr = [10, 20, 30, 40, 50]
arr[1]= 18
console.log(arr)
console.log(typeof(arr))

let penprice = 15
let pencilprice = 10
output = "Total Price is "+ (penprice + pencilprice) + " Rupees"
console.log(output)
output1 = `Total price is${penprice+pencilprice} Rupees`
console.log(output1)

let number14= [10,20,30,40,50]
number14.push(60)
console.log(number14)
number14.pop(20)
console.log(number14)

let colors = ["Red", "Black", "Brown"]
console.log(colors)
colors.unshift("Blue")
console.log(colors)
colors.shift()
console.log(colors)

let months = ['January' , 'July', 'March', 'August']
months.shift("January")
months.shift("July")
months.unshift("June")
months.unshift("July")
console.log(months)

for(let i=0; i<=10; i++)
{
    console.log(i)
}

for(let i=1; i>=10; i--)
{
    console.log(i)
}

for( let evno=2; evno<=20; evno=evno+=2)
{
    console.log(evno)
}

for(let odno=1; odno<=15; odno=odno+=2)
{
    console.log(odno)
}

let input= prompt("Enter number")
input= parseInt(input)
for (let i= input ; i<=50 ; i=1+input)
{
   console.log(input)
}

//for loop
for(i=1;i<=3;i++)
    console.log(`out loop: ${i}`)
    {
    for(j=1;j<=3;j++)
    {
        console.log(i)
    }
}

//while loop
let i1=10
while (i1<=10)
    {
        console.log(i1)
        i++
}

//Break keyword
let w=3
while(w<=5)
{
    if(w==3){
        break;
    }
    console.log(w)
    w++;
}

//loops of fruits
let fruit1= ["Mango", "Banana", "Litchi","Orange"]
for(let i=0; i< fruit1length; i++)
{
    console.log(fruit1[i])
}

//nested loop with nested array
let name2 = [['Hazel', 'Jahanvi', 'hetvi'],['megha', 'axita', 'arnika']]
console.log(name2[0][1])
for( let i=0; i<names2.length; i++)
{
for(let j=0; j<names2.length; j++)
{
    console.log(names[i][j])
}
}
let name3 = [['Hazel', 'Jahanvi', 'hetvi'],['megha', 'axita', 'arnika'],['viswah', 'rajveer', 'devrat']]
for(let i=0; i<name3.length; i++)
{
    console.log(name3[i])
}

// Object literals
const student ={
    Name : 'Hazel',
    Age : 20,
    Marks : 96,
    City : 'Vadodara',
}
console.log(student)
const student1 =['Hazel', 20,96,Vadodara]
console.log(student1)

//Get Values
//1.Dot Notation
console.log(student.Name)
//2. Bracket Notation
console.log(student['Age'])
console.log(student['Age','Marks'])

//Print a particular array
const item={
    price : '100$',
    discount : '10%',
    Color : ['red','black','blue']
}
console.log(item)
console.log(item.Color[0])

//Add or update value
const Student={
    Name : 'Hazel',
    Age : 20,
    Marks : 96,
    City : 'Vadodara',
}
console.log(Student.city='Mumbai')
console.log(Student.gender='Female')
console.log(Student)
delete Student.City
console.log(Student)

//objects of objects
const friends={
    hazel:{
        grade:'A1',
        city:'vadodara'
    }

    ,Jaanu:{
        grade:'A1',
        city:'vadodara'
    }
    ,Priya:{
        grade:'A1',
        city:'Anand'
    }
}
console.log(friends)
console.log(friends.hazel.grade)
console.log(friends.hazel.city)
console.log(friends.hazel.gender='female')
console.log(friends.hazel.city='surat')
console.log(friends)

//Arrays of objects
const classInfo=[
    {
        Name : 'Hazel',
        Grade : 'A1',
        City : 'Vadodara'
    },
    {
        Name : 'Jahanvi',
        Grade : 'A1',
        City : 'Vadodara'
    },
    {
        Name : 'Hiral',
        Grade : 'A1',
        City : 'Vadodara'
    },
]
console.log(classInfo)
console.log(classInfo[1].Name)
console.log(classInfo[i].Name)

//math object
console.log(Math,PI)
console.log(Math.E)
//math object: Absolute value
console.log(Math.abs(-5))
//Identifing the power of the first element
console.log(Math.pow(2,3))
//Math.floor: counting a round figure (smallest)
console.log(Math.floor(4.7))
//Math.ceil:counting a round figure (largest)
console.log(Math.ceil(5.2))
//Math.random : use to generate a random number between 0 to 1
console.log(Math.random())
//Generate random number 1 to 10
let random = Math.random()
    console.log(random)
    let num1 = Math.floor(random*10+1)
    console.log(num1)

//Generate random number 1 to 100
let Random = Math.random()
    console.log(Random)
    let num2 = Math.floor(Random*100+1)
    console.log(num2)

//Generate random number 1 to 5
let random1 = Math.random()
console.log(random1)
let num3 = Math.floor(random1*5+1)
console.log(num3)

//Generate random number 1 to 6
let Random1 = Math.random()
console.log(Random1)
let num4 = Math.floor(Random1*6+1)
console.log(num4)