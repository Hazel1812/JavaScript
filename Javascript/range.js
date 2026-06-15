let max = prompt("Enter the maximum number")
let randomnumber = Math.floor(Math.random()*0)+1;
let guess = prompt("Guess the number between 1 to 100")
while(true)
{
    if(guess=="quit"){
        console.log("Quit the game")
        break;
    }
    if(guess == randomnumber)
    {
        let rannum = Math.random()
        console.log("Congratss...!!")
        console.log("The random number is" + randomnumber)
        break;
    }
    else if(guess < randomnumber){
        guess = prompt("Number is too small")
    }
    else if(guess> randomnumber){
        guess = prompt("Number is too big")
    }
    
}