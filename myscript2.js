
////////////////////////////////////////next button////////////////////////////////////////////
var j=0;
function setButtonColor()
{
  document.getElementsByName("buttona")[0].style.backgroundColor="#ebe8df";
     document.getElementsByName("buttona")[1].style.backgroundColor="#ebe8df";
        document.getElementsByName("buttona")[2].style.backgroundColor="#ebe8df";
           document.getElementsByName("buttona")[3].style.backgroundColor="#ebe8df";
}
function nextQues()

{
              setButtonColor();
              document.getElementById('qbody').style.backgroundColor="#a2ecf2";
              document.getElementById('try').style.display="none";
              document.getElementById('try2').style.display="none";
  console.log(j);
  if(j < myquestions.length )
  {
document.getElementById("question").innerHTML=myquestions[j].qtext;
document.getElementById("button2").innerHTML= myquestions[j].atext[0];
document.getElementById("button3").innerHTML= myquestions[j].atext[1];
document.getElementById("button4").innerHTML= myquestions[j].atext[2];
document.getElementById("button5").innerHTML= myquestions[j].atext[3];
j++;
}
else {
  //window.location.href ='./index3.html';
  document.getElementById('question').style.display = "none";
    document.getElementById('options').style.display = "none";
      document.getElementById('choices').style.display = "none";
        document.getElementById('scores').style.display = "inline-block";
        document.getElementById('playagain').style.display="inline-block";
          document.getElementById('scoretotal').innerHTML = score;
}

}


///////////////////////////////////questions/////////////////////////////////////////////////
var myquestions = [

 {
  qtext: 'What is 2 + 2?',
    atext: [4,22,7,80],
      correct:4,
  },
{
  qtext:'The World Largest desert is:' ,
  atext:['Thar','Kalahari','Sahara','Sonoran'],
  correct:'Sahara',
},
{
  qtext:'Which is considered as the biggest port of India ?' ,
  atext:['Kolkata','Mumbai','Cochin','Chennai'],
  correct:'Mumbai',
},
{
  qtext:' The hottest planet in the solar system is:' ,
  atext:['Earth','Mars','Venus','Jupiter'],
  correct:'Venus',
},
{
  qtext:'Which planet is the smallest:' ,
  atext:['Neptune','Mars','Earth','Mercury'],
  correct:'Mercury',
},
{
  qtext:'What is the square root of 144?' ,
  atext:[12,10,8,14],
  correct:12,
},
{
  qtext:'How many straight edges does a cube have?' ,
  atext:[10,11,12,13],
  correct:12,
},
{
  qtext:'What color is a Himalayan poppy?' ,
  atext:['White','Blue','Grey','Red'],
  correct:'Blue',
},
{
  qtext:'Garampani sanctuary is located at' ,
  atext:['Gujarat','Assam','Nagaland','Sikkim'],
  correct:'Assam',
},
{
  qtext:'The metal whose salts are sensitive to light is ?' ,
  atext:['Zinc','Copper','Silver','Iron'],
  correct:'Silver',
}
];

///////////////////////////////////submit button////////////////////////////////////////////
var score = 0;
var x;
function checkAns(clicked_id)
{
  setButtonColor();
    console.log("Vlaue of j : " + j);
    console.log("selected btn: " + clicked_id);
   x=document.getElementById(clicked_id).innerText;
   document.getElementById(clicked_id).style.backgroundColor="#858784";

}
function checkAns2(clicked_id)
{
  document.getElementById('try').style.display="none";
  document.getElementById('try2').style.display="none";
  console.log(x);
  console.log("The correct answer : " + myquestions[j-1].correct);
  if(x == myquestions[j-1].correct)
  {
     console.log("Correct Answer");
     score++;
     console.log("Score : " + score);
     document.getElementById('qbody').style.backgroundColor="#71f76a";
     document.getElementById('try').style.display="block";
}
else {
  document.getElementById('qbody').style.backgroundColor="#b0000f";
  document.getElementById('try2').style.display="block";
}
}
//////////////////////playagain//////////////////////
function playa()
{
window.location.href ='./index.html';
}
