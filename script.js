const roll = document.getElementById("roll");
var newScore = 0;
var totalScore = 0;
const reset =document.getElementById("reset");
var status = document.getElementById("status");
var image = document.getElementById("image");
var dummy = document.getElementById("dummy");
// reset.style.display="none";
document.getElementById("newScore").innerHTML = "click button to roll dice";

roll.addEventListener('click',()=>{
   
    
    // image.classList.add("rollDice");
    newScore= Math.ceil(Math.random()*6);
        document.getElementById("image").innerHTML = '<img src = "../img/dice'+ newScore+ '.png" >' ;
        document.getElementById("newScore").innerHTML = newScore;
        
    // console.log(newScore)



    if (newScore==1){
        
        status = " You Lost"
        document.getElementById("status").innerHTML = "YOU LOST!!!";
        reset.style.display="block";
        roll.style.display="none";

    }

    
    totalScore+=newScore;
    // console.log(totalScore)
    document.getElementById("totalScore").innerHTML = totalScore;

     if (totalScore >= 20){
         status = "YOU WIN!!!!"
        document.getElementById("status").innerHTML = status;
        reset.style.display="block";
        roll.style.display="none";

     }

    
})

reset.addEventListener('click', ()=>{

    totalScore=0;
    document.getElementById("status").innerHTML ="\n";
    document.getElementById("totalScore").innerHTML = totalScore;
    document.getElementById("newScore").innerHTML = "click button to roll dice";
    document.getElementById("image").innerHTML = " ";
    reset.style.display="none";
    roll.style.display="block";





} )