//let todo = [];
//let req = prompt("Enter Valid Request :");
//while(true){
//   req = req.toLowerCase();
//   if (req =="quit"){
//        console.log("Quiting the App");
//        break;
//    }
//   if (req =="list"){
//        console.log("--------------------TO-DO LIST-------------------------")
//        for (task of todo){
//            console.log(task);
//        }
//        console.log("----------------------------------------------------")
//    }
//   else if (req =="add"){
//    let task = prompt("Enter the task you want to add :")
//        todo.push(task)
//        console.log("Task successfully added")
//    }
//    else if (req == "delete") {
//    let index = Number(prompt("Enter the index of task to delete:"));
//
//    if (index >= 0 && index < todo.length) {
//        let deletedTask = todo.splice(index, 1);
//        console.log("Deleted task:", deletedTask[0]);
//    } else {
//        console.log("Invalid index");
//    }
//}

//  else {
//        console.log("Invalid request");
//    }
//
//    req = prompt("Enter Valid Request (add, list, delete, quit):");
//}

btn = document.querySelector('button')
ul= document.querySelector('ul')
inp= document.querySelector('input')
btn.addEventListener('click', function(){
    let item = document.createElement('li')
    item.innerText= inp.value
    ul.appendChild(item)
    let delbtn = document.createElement('button')
    delbtn.innerText='delete'
    delbtn.classList.add('add')
    item.appendChild(delbtn)
    let delbtns= document.querySelectorAll('.del')
    for(delB of delbtns){
        delB.addEventListener('click', function()
    {
        let par = this.parentElement
        console.dir(par)
        par.remove()
    })
    }
    inp.value=" "
})

