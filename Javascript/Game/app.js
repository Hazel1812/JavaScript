let h2= document.querySelector('h2')
let box= document.querySelector('.box')
let bod= document.querySelector('button')
bod.addEventListener('click', function(){
    let red = Math.floor(Math.random()*255)
    let green =Math.floor(Math.random()*255)
    let blue = Math.floor(Math.random()*255)

    let color = `rgb(${red},${green},${blue})`
    box.style.backgroundColor = color
    h2.innerText= color;
})

let para= document.querySelector('p')
para.addEventListener('click',function()
{
    console.log("para who clicks")
})

let mouse = document.querySelector('.mouse')
mouse.addEventListener('mouseenter', function(){
    console.log("Hello, I m here.")
})

let box1= document.querySelector('.box1')
//box1.innerText="hello, i m inside."
box1.addEventListener('mouseenter', function(){
    console.log("Hello, i m inside the box.")
})

//This Keyword
let b= document.querySelector('.xyz')
b.addEventListener('click', function(){
    console.log(this)
    console.log(this.innerText)
})

let head= document.querySelector('h1')
head.addEventListener('click',function(){
    console.log(this.innerText)
    console.log(this.style.color='blue')
})

let head1= document.querySelector('h3')
head1.addEventListener('click',function(){
    console.log(this.innerText)
    console.log(this.style.color='blue')
})

let head2= document.querySelector('.hel')
head2.addEventListener('click',function(){
    console.log(this.innerText)
    console.log(this.style.color='blue')
})

let head3= document.querySelector('.cl')
head3.addEventListener('click',function(){
    console.log(this.innerText)
    console.log(this.style.color='blue')
})

function Color(){
    console.log(this)
    this.style.color='blue';
}
document.querySelector('h1').addEventListener('click',Color)
document.querySelector('h3').addEventListener('click', Color)
document.querySelector('.hel').addEventListener('click', Color)
document.querySelector('.cl').addEventListener('click', Color)

//Keyboard events
btn= document.querySelector('.hi')
btn.addEventListener('dbclick', function(event){
    console.log("button clicked")
    console.dir(event)
})

//ihp= document.querySelector("input")
//ihp.addEventListener("keydown", function(event){
//    console.log("key is pressed.")
//    console.dir(event.type)
//    console.log(event.key)
//    console.log(event.code)
//})

hi=document.querySelector("input")
hi.addEventListener("keydown", function(event)
{
    if(event.code === "Arrowup"){
        console.log("up the character.")
    }
    else if (event.code === "Arrowdown"){
        console.log("down the character.")
    }
    if (event.code === "Arrowright"){
        console.log("right the character.")
    }
    else if (event.code === "Arrowleft"){
        console.log("left the character")
    }
})

hi=document.querySelector("input")
hi.addEventListener("keydown", function(event)
{
    if(event.code === "KeyU"){
        console.log("up the character.")
    }
    else if (event.code === "KeyD"){
        console.log("down the character.")
    }
    if (event.code === "KeyR"){
        console.log("right the character.")
    }
    else if (event.code === "KeyL"){
        console.log("left the character")
    }
})

//Event extracting
div= document.querySelector('div')
ul= document.querySelector('ul')
li= document.querySelector('li')

div.addEventListener('click', function(){
    console.log("div clicked")
})
ul.addEventListener('click',function(){
    console.log("ul")
})
//for(const item1 of li){
//    item1.addEventListener('click', function(){
//        console.log("li clicked" + item1.innerText)
//    })
//}

function hello1(){
    console.log("Inside hello function.")
    console.log("hello")
}
function demo(){
    console.log("Calling hello function.")
    hello1()
}
console.log("Calling demo function.")
demo ()
console.log("Done,bye!")

//Big function Calling.
function one(){
    //debugger
    return 1;
}
function two(){
    return one()+one();
}
function three(){
    let sum= two()+one()
    console.log(sum)
}
console.log("calling three function.")
three()

setTimeout (function(){
    console.log("To")
},2000)
console.log("welcome",)
setTimeout(function(){
    console.log("KJIT")
},5000)

