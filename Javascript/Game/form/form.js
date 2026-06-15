/*form= document.querySelector("form")
form.addEventListener('submit', function(event){
    event.preventDefault()  //used for saving data in unknown file.
    console.log("Form Submited")
})

//extracting form data
hvp= document.querySelector("input")
form.addEventListener('submit', function(){
    event.preventDefault()
    console.dir()
})*/

st= document.querySelector('form')
st.addEventListener('submit', function(event){
    event.preventDefault()
    let user= document.querySelector("#user")
    let pass = document.querySelector("#password")
    console.log(user.value)
    console.log(pass.value)
    console.log("Form submitted")
    alert("Hi" + user.value + "Your password is set to" + pass.value)
})