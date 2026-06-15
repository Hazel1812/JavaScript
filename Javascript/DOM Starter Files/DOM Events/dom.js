let start = document.querySelector('button')
start.onclick= function(){
    console.log('I m Hazel')
    alert('I m alert')
}
function sayhello(){
    console.log("Hello")
}
start.onclick=sayhello

let but= document.querySelectorAll("button")
but.onmouseenter=mouseEnter
for(buts of but){
    but.onmouseenter=mouseEnter();
}
function mouseEnter(){
    console.log("Welocome to dom classes.");
}
but.onclick=mouseEnter
