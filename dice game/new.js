var randomnumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImg = "dice" + randomnumber1 + ".png";

var randomImageSource = "images/" + randomDiceImg ; 

document.querySelectorAll("img")[0].setAttribute("src",randomImageSource);

var randomnumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImg2 = "dice" + randomnumber2 + ".png";

var randomImageSource2 = "images/" + randomDiceImg2 ; 

document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);

if(randomnumber1 > randomnumber2)
{
    document.querySelector("h1").innerHTML = "🏆 Player 1 wins";
}
else if (randomnumber2>randomnumber1)
{
    document.querySelector("h1").innerHTML = "🏆 Player 2 wins";
}

else{
    document.querySelector("h1").innerHTML = "📍It's a Draw";
}
