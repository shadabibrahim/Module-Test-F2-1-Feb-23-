let count=0;
for(let i=0; i<3; i++)
{
  var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6
  count = count + randomNumber1;
  

var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

}

console.log(count);


  if (count <10 ) {
    document.querySelector("h4").innerHTML = "Try Again After Scoring More Than 10";
  
  }
  else if (count > 10) {
    document.querySelector("h4").innerHTML = "You Eligible for Accesing Fourth Image";
  }
  else {
     alert("Try again after scoring more than 10");
  }

