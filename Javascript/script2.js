const movie = "Kabir Singh"
let guess = prompt ("Enter the movie name");
while((guess!=movie) && (guess != "quit"))
{
    console.log("Wrong answer")
    break;
    guess = prompt("wrong answer; try again")
}
if(guess==movie)
{
    console.log("Congratsss!!!")
}
if(guess =='quit')
{
    console.log("quit the game")
}

