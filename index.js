var list = [];
list.push("images/dice1.png");
list.push("images/dice2.png");
list.push("images/dice3.png");
list.push("images/dice4.png");
list.push("images/dice5.png");
list.push("images/dice6.png");

 var randomNumber1 = Math.floor(Math.random()*6);
 var randomNumber2 = Math.floor(Math.random()*6);
 document.querySelector(".img1").setAttribute("src",list[randomNumber1]);
 document.querySelector(".img2").setAttribute("src",list[randomNumber2]);
 console.log("anurag");

if(randomNumber1 > randomNumber2)
 document.querySelector("h1").innerHTML="Player1 wins";

 else if(randomNumber1 < randomNumber2)
 document.querySelector("h1").innerHTML="Player2 wins";

 else
 document.querySelector("h1").innerHTML="Its a Draw!!";
