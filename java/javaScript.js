'use strict';

alert("welcome to my game")
alert("It is how much do you know about me")
alert("the rules of game is:\n1. Enter your name.\n2. Dont answer the same question twice. note (Because an answer will not count for you \nEnjoy the game)")
let yourName = prompt("Enter your name")
let numberOfQuestionAnswered = 0
let numberOfCorrectAnswered = 0
let numberOfWrongAnswered = 0
function question(){
while(numberOfQuestionAnswered <= 4){
  let choseQustion = prompt("Chose your Qustions from 1 to 5")
  choseQustion =parseInt(choseQustion);
  switch(choseQustion){
      case 1:
  let qustion1 = prompt("Is my name Hesham Hassan?")
  qustion1 = qustion1.toLowerCase();
  let answerd1 = false;
  if(qustion1 === 'y' || qustion1 === "yes"){
     alert("your answer is yes")
     console.log("qustion 1 your answer is yes")
     alert("your answer is Correct")
     numberOfCorrectAnswered+=1;
   }else if(qustion1 === 'n' || qustion1 === "no"){
   alert("your answer is no")
   console.log("qustion 1 your answer is no")
   alert("youe answer is Wrong")
   numberOfWrongAnswered-=1
    }else{
      alert("Please answer with yes or no")
    }
      if(answerd1 == false){
         numberOfQuestionAnswered+=1
        answerd1 = true;
      }
  break;

  case 2:
  let qustion2 = prompt("Is my old 25 years old?")
  qustion2 = qustion2.toLowerCase();
  let answerd2 = false;
  if(qustion2 === 'n' || qustion2 === "no"){
   alert("youe answer is no")
   console.log("qustion 2 your answer is no")
   alert("youe answer is Correct")
     numberOfCorrectAnswered+=1;
   }else if(qustion2 === 'y' || qustion2 === "yes"){
   alert("youe answer is yes")
   console.log("qustion 2 your answer is yes")
   alert("youe answer is Wrong")
   numberOfWrongAnswered-=1
    }else{
      alert("Please answer with yes or no")
    }
      if(answerd2 == false){
         numberOfQuestionAnswered+=1
        answerd2 = true;
      }
  break;

  case 3:
  let qustion3 = prompt("Am I still watch anime?")
  qustion3 = qustion3.toLowerCase();
  let answerd3 = false;
  if(qustion3 === 'y' || qustion3 === "yes"){
   alert("youe answer is yes")
   console.log("qustion 3 your answer is yes")
   alert("youe answer is Correct")
     numberOfCorrectAnswered+=1;
   }else  if(qustion3 === 'n' || qustion3 === "no"){
   alert("youe answer is no")
   console.log("qustion 3 your answer is no")
   alert("youe answer is Wrong")
   numberOfWrongAnswered-=1
   answerd3 = false;
    }else{
      alert("Please answer with yes or no")
    }
      if(answerd3 == false){
         numberOfQuestionAnswered+=1
        answerd3 = true;
      }
  break;

  case 4:
  let qustion4 = prompt("Am I Egyptian?")
  qustion4 = qustion4.toLowerCase();
  let answerd4 = false;
  if(qustion4 === 'y' || qustion4 === "yes"){
   alert("your answer is yes")
   console.log("qustion 4 your answer is yes")
   alert("your answer is Correct")
     numberOfCorrectAnswered+=1;
  }else if(qustion4 === 'n' || qustion4 === "no"){ 
  alert("your answer is no")
  console.log("qustion 4 your answer is no")
  alert("your answer is Wrong")
  numberOfWrongAnswered-=1
   }else{
      alert("Please answer with yes or no")
    }
      if(answerd4 == false){
         numberOfQuestionAnswered+=1
        answerd4 = true;
      }
  break;

  case 5:
  let qustion5 = prompt("Do I have a driver's license?")
  qustion5 = qustion5.toLowerCase();
  let answerd5 = false;
  if(qustion5 === 'n' || qustion5 === "no"){
   alert("youe answer is no")
   console.log("qustion 5 your answer is no")
   alert("youe answer is Correct")
     numberOfCorrectAnswered+=1;
   }else if(qustion5 === 'y' || qustion5 === "yes"){ 
   alert("youe answer is yes")
   console.log("qustion 5 your answer is yes")
   alert("youe answer is Wrong")
   numberOfWrongAnswered-=1
    }else{
      alert("Please answer with yes or no")
    }
      if(answerd5 == false){
         numberOfQuestionAnswered+=1
        answerd5 = true;
      }
  break;

  default:
      alert("your Choice is not added yet in my web page")
      break;
   }
  }
}
question();

let num = 5;
for( let i = 1; i <= 4; i++){
   let attempts = 4;
   let qustion6 = prompt("qustion 6 I'm thinking of a number from 1 to 10")
   qustion6 = parseInt(qustion6);
   if(i < 4){
   if( qustion6 > num){
      alert("your guess too high")
      attempts-=1
      numberOfWrongAnswered-=1
   }else if(qustion6 < num){
    alert("your guess too low")
    numberOfWrongAnswered-=1
   }else if(qustion6 == 5){
      alert("your guess is Correct")
      attempts-=1
      numberOfQuestionAnswered+=1
      numberOfCorrectAnswered+=1;
      break;
     }

      attempts-=1
    alert('Sorry youe answer is wrong, try again, attempts left: ' + attempts );
}else{alert("the number I'm thinking about is: "+ num)}

}
let fevcar = ['ford', 'dodge', 'mitsubishi','Lamborghini','ferrari'];
alert("qustion 7 rules :\n1.you have 6 chances to guess\n2. Type the name of the car for guess, example: (ford)")
for(let i = 1; i <= 6; i++){
   let attempts = 6;
   let chose = prompt("Guess what's my favorite car").toLowerCase();
   for(let y = 0; y < fevcar.length; y++){
      if(chose == fevcar[y]){
        alert("your guess is Correct")
        numberOfQuestionAnswered+=1
        numberOfCorrectAnswered+=1;
        i=7;
        break;
            
         }
      
   }
   attempts-=1
    alert('Sorry youe answer is wrong, try again, attempts left: ' + attempts );
    
}
alert('ford', 'dodge', 'mitsubishi','Lamborghini','ferrari');
   
document.write("<h3 style='color: blue'>"+ "  Yor name is  "+yourName +" and your score is:"+"</h3>");
console.log("Number Of Question Answered"+numberOfQuestionAnswered);
alert("you are answered:"+numberOfQuestionAnswered)
document.write("<p style='color: blue';>"+ "Number Of Question Answered"+numberOfQuestionAnswered +"</p>");

console.log("Number Of Correct Answered"+numberOfCorrectAnswered);
alert("your are Correct answered is:"+numberOfCorrectAnswered);
document.write("<p style='color: blue'>"+ "Number Of Correct Answered"+numberOfCorrectAnswered +"</p>");

console.log("Number Of wrong Answered"+numberOfWrongAnswered);
alert("your are Wrong answered is:"+numberOfWrongAnswered);
document.write("<p style='color: blue'>"+ "Number Of wrong Answered"+numberOfWrongAnswered +"</p>");
