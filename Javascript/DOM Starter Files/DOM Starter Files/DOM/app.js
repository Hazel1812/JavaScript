//DOM - Document Object Model
console.dir(document)
console.dir(document.all)
console.dir(document.all[8])
console.dir(document.all[8].innerText)
document.all[8].innerText="Hazel"
document.all[8].innerText="Spider Man"

//Selecting elements:
console.dir(document.getElementById("main-image"))

let imgObj=document.getElementById("main-image")
console.dir(imgObj.src)

console.dir(document.all[12].innerHTML="Super hero")
console.dir(document.all[12].innerHTML="Spider-Man")

//Selecting by using classname:
let img= document.getElementsByClassName("oldimg")
console.dir(img)

let img1= document.getElementsByClassName("oldimg") 
for(i=0;i<img1.length;i++){
    console.dir(img1[i].src);
}

//for(i=0;i<img1.length;i++){
//    console.dir(img [i].src="Assets/Amazing_Fantasy.jpg")
//}

//Selecting by using Tag_Name:
let para= document.getElementsByTagName("P")
console.dir(para)
//console.log(para[0].innerText="abc")      //"" using this compulsory because without using this the answer will come 'null'

//Selecting using Query_selector:
let para1 = document.querySelector('p')
console.dir(para1)
console.log(para1.innerText)

let heading= document.querySelector("#mainHeading")
console.dir(heading)
//console.log(heading.innerText='Hazel')

let Img = document.querySelector(".oldimg")
console.dir(Img)
console.log(Img.alt)

//Selecting element using Query_SelectorAll
let alpara = document.querySelectorAll('p')
console.dir(alpara)

let info = document.querySelectorAll("div a")
console.dir(info)

//properies and methods
let para2 = document.querySelector('p')
console.dir(para2.innerText)            //shows simple text
console.dir(para2.innerHTML)            //shows all text with tags
console.dir(para2.textContent)          //shows text with spaces because it not include links.

//console.dir(para2.innerText="I m Hazel")
//console.dir("I m <b>Hazel</b>")
//console.dir(para2.innerHTML="I m <b>Hazel</b>")

console.dir(heading.innerHTML="<u>Spider Man</u>")

//Manipulating Attritubes (Encapsulation)      
let pic = document.querySelector("#main-image")     //GetAttribute
pic = pic.getAttribute('src')
console.dir(pic) 

//pic= pic.setAttribute('class','spider-image')    //SetAttritubes
//console.dir(pic)

//Manipulating style with java
let Heading = document.querySelector('h1')
console.dir(Heading)
Heading.style.color='darkred'
Heading.style.backgroundColor='lightblue'
 
let box= document.querySelectorAll('div a')
for(link of box){
    link.style.color='purple';
}
console.log(box)

//ClassList 
let Heading1 = document.querySelector('h1')         //make class in html at h1
console.dir(Heading1.classList)

let heading2 = document.querySelector('h1')         //make class in css then attach to java
heading2.classList.add("green")//to add class
console.dir(heading2)
heading2.classList.remove("green")// to remove class
console.dir(heading2)
heading2.classList.contains("green")//give true and false whether it is present or not.
console.dir(heading2)

//Toggle(it is switching pocess - if the class exists then it removes & if class doesn't exists then it prints)
heading2.classList.toggle('green')
console.dir(heading2)

//Navigation on page
let root= document.querySelector('.Main')
console.dir(root.children)
console.dir(root.childElementCount)

let child = document.querySelector('.Main')
console.dir(child.nextSibling)
console.dir(child.nextElementSibling)
console.dir(child.previousElementSibling)
console.dir(child.previousSibling)

//Adding/Creating element
let nwp = document.createElement('h1')
console.dir(nwp.innerText='I m Hazel')

let bdy = document.querySelector('body')
console.dir(bdy.appendChild(nwp))

let newpara = document.createElement('p')
console.dir(newpara.innerText='Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente mollitia libero possimus. A incidunt quam neque sequi tenetur accusantium consectetur et natus dicta? Vero, impedit. Quo nisi illo temporibus accusamus?')
console.dir(bdy.appendChild(newpara))

let fbox = document.createElement('button')
console.dir(fbox.innerHTML= "Click Me")
let Info = document.querySelector('.pubInfo')
//console.dir(Info.appendChild(fbox)) 
//console.dir(Info.prepend(fbox)) 
console.dir(Info.insertAdjacentElement("beforebegin",fbox)) 
console.dir(Info.insertAdjacentElement("afterbegin",fbox)) 
console.dir(Info.insertAdjacentElement("afterend",fbox))
console.dir(Info.insertAdjacentElement("beforeend",fbox))  

//Remove element
let body1= document.querySelector('body')
//console.dir(body1.remove(body))
