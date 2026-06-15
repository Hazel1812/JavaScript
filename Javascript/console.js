//Function(M.Imp)//
function name (){
    console.log("Hazel")
}
name()

function greet (Name){
    console.log("Welcome" + Name)
}
greet(" Hazel")

//addition of 2 number
function add (a,b){
    console.log("Add numbers:" +(a+b))
}
add(10,20)

function Add (a,b){
    return (a+b);
}
let result = Add(10,3)
console.log(result)

// Multiplicaion
function Multi (a,b,c){
    console.log("Answer:" +(a*b+c))
}
Multi(2,4,10)

const add1 = function(a,b){
    return(a+b);
}
console.log(add1(10,8))

//Generate random number 1 to 6
let Random1 = Math.random()
console.log(Random1)
let num4 = Math.floor(Random1*6+1)
console.log(num4)

//sum of 1 to 10 numbers
let sum = 0;
for(i=1; i<=10;i++) {
    sum=sum+i;
    console.log(sum)
}

//eligilable for vote
function vote(age) {
    {
        console.log("Enter your age:")
    }
    if(age <= 18){
        console.log("You can vote")
    }
}
//Create Hazel age is 21.
function info (name,age){
    console.log("Hazel age is 21")
}
info('Hazel',21)

//multiplication table of 22
for (let i = 1; i <= 10; i++) {
  const result = 22 * i;
  console.log("22 x " + i + " = " + result);
}

//Return keyword
nums = [10,20,30,40,50,60,70]
console.log(nums.slice(2,4))

function sum1 (a,b){
    return(a+b);
}
let result1 = sum1(20,30)
console.log(result1)

//He or she can vote from return keyword
//Print string without inverted comma
//Function scope
//function jdsum(a,b) {
//    let sum2 = a+b;
//    return sum2;
//}
//jdsum (10,20)
//console.log(sum2)

let sum3 =60
function colsum(a,b){
    let sum = a+b;
    console.log(sum);
}
colsum(10,15)
console.log(sum3)

//Block scope

//{
 //   let a=10
//}
//console.log(a)     Ans. a is not defined

//{
//    const a = 10
//}
//console.log(a)     Ans. a is not defined

{
    var a =10
}
console.log(a)       //Ans. 10
//
for (let i=0; i<=5; i++)
{
    console.log(i)
}
//console.log (i)

function outerfunction(){
    let x = 10;
    let y = 20;
    function innerfunction(){
        console.log(x,y)
    }
    innerfunction()
}
outerfunction()

function outfunction(){
    function infunction(){
        console.log(a)
        console.log(b)
        console.log(a,b)
    }
    let a= 30;
    let b= 20;
    infunction()
    }
    outfunction()
   
    //console.log(d)
    //var d=19

function inner() {
    let x = 10;
    let y= 18;
    function outer(){
        let a = 10
        console.log(x)
        console.log(y)
    }
    console.log(a)
    inner()
}

//Function expression
//Higher order function
function mutliplegreet(func, count)
{
    for (let i=1; i<=count; i++)
        {
        func();
    }
    let greet = function()
    {
        console.log("hello")
    }
}
mutliplegreet(greet,5)

//Methods
const calculator ={
    num : 45,
    add : function(a,b){
        return a+b;
    },
    sub : function(a,b){
        return a-b;
    },
    multi : function(a,b){
        return a*b;
    },
    div : function(a,b){
        return a/b;
    }
}
console.log(calculator)

//this keyword
const student={
    Name1:"hazel",
    Age :21, 
    english :90,
    physics: 110,
    maths: 98,
    getavg(){
        let avg = (this.english+this.physics+this.maths)/3
        console.log(student)
    }
}

//function demo(){
//    console.log(this)
//}

//try and catch
console.log("I m Athlete")
console.log("My friends are Jahanvi and Hetvi.")
//console.log(hazel)
console.log('I hate fake peoples')
console.log("I don't like fake friends.")

//arrow function
//const sum4 = (a,b)=>{
  //  return a*b;
//}
//sum4(2,3)
//console.log(sum4)

function cubeOf(num1){
    let cube
    cube= num1*num1*num1
    console.log(cube)
}
cubeOf(12)

//const message=()=>"Hello Hazel"
//console.log(message)

//for_each function
let array =[1,2,3,4,5]
array.forEach(function(eligilable){
    console.log(eligilable)
})

array.forEach((eligilable)=>{       //for arrow method or simple method
    console.log(eligilable)
})

const arrayobject=[
    {
        Name2 : 'Hazel',
        Marks1 : 99
    },
    {
        Name3 : 'Jahanvi',
        Marks2 : 98
    },
    {
        Name4 : 'Hetvi',
        Marks3 : 90
    }
]
console.log(arrayobject[1])

let newarr = array.map((el)=>{      //map function
    return el *2;
})
console.log(newarr)

let stud =[
    {
        Name2 : 'Hazel',
        Marks1 : 99
    },
    {
        Name2 : 'Jahanvi',
        Marks1 : 98
    },
    {
        Name2 : 'Hetvi',
        Marks1 : 90
    }
]
let cgpa = stud.map(el=> {          //to find cgpa
    return (el.Marks1/10);
})
console.log(cgpa)

//filter- apply to array
let newarray = [1,2,3,4,5,6,7,8,15,12,18] 
let even = newarray.filter((number)=>
{
    return(number%2==0);
})
console.log(even)

let less = newarray.filter((number)=>
{
    return(number<=5);
})
console.log(less)

let odd = newarray.filter((number)=>
{
    return(number%1==0);
})
console.log(odd)

//every method-gives true or false according to condition check whole array then it will give answer.
let arrnum= [1,2,3,18,12,11,12,28]
arrnum.every((el)=>
    (el%2==0))
console.log(arrnum)

let colors = ['red','pink','black','white','yellow','blue']
//some method - give true or false according to condition if one is true or false it will gives answer.

//reduce function
let arr = [1,2,3,4,5,3]
let final = arr. reduce((result,el)=>{
    return (result+el);
})
console.log(final)

let arr1 = [10,5,1218,17,98,75,65]
let max = 0
for (i=0; i< arr1.length ; i++){
    if (max< arr1[i]){
        max = arr1[i]
    }
}
console.log(max)

let final1 = arr1.reduce((max,el)=>{
    if (max>el){
        return max;
    }
    else{
        return el;
    }
})
console.log(final1)

let final2 = arr1.reduce((min,el)=>{
    if (min<el){
        return min;
    }
    else{
        return el;
    }
})
console.log(final2)

let num2 = [10,20,30,40]
let div = num2.map(num2 => num2 /10);
console.log(div)

let arr2 = [7,8,9,25,18,75,2,1] // function-reduce method
function getmax(arr2){
    let Sum = arr2.reduce((max,el)=>{
    if (max>el){
        return max;
    }
    else{
        return el;
    }
})
return Sum;
}
console.log(getmax(arr2))

let Sum1 = arr2.reduce((min,el)=>{
    if (min<el){
        return min;
    }
    else{
        return el;
    }
})
console.log(Sum1) 

//function add

//spread operators
let arrnum1 = [1,5,7,9,8,2]
console.log(Math.min(arrnum1))
console.log(...arrnum1)
console.log(Math.min(...arrnum1))

let str ="hazel"
console.log(str)        //same text
console.log(...str)     //space between letters
console.log(str)
let strarr = [...str]
console.log(strarr)

let Odd= [1,3,5,7,9]
let Even= [2,4,6,8]
let Odd_Even = [...Odd,...Even]
console.log(Odd_Even)

let data = {
    username : "H@zel",
    password : "hvpjm"
}
let totaldata = {...data, id : 182, city : 'vadodara'}
console.log(totaldata)

let arr3 = [10,20,30,40]
let obj = {...arr3}
console.log(obj)

let str1 = 'Hazel'
let obj1 = {...str1}
console.log(obj1)

//De structuring:
let friend = ['Hazel','Jahanvi', 'Nirali', 'Dhwani']
let [winner, runner_up, second_runnerup,...others] = friend
console.log(winner, runner_up)
console.log(others)

const Stud ={
    Name : 'Hazel',
    age : 21,
    branch : 'I.T.',
    subject : ['CPDP', 'SE', 'DWM', 'CNS', 'AI'],
    username : 'Hazel_1812',
    Password : 'hpvjm',
    city : 'Vadodara'
}
let {username, Password, age, subject, city} =Stud
console.log(username, Password, age, subject, city)