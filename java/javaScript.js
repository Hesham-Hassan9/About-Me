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
     numberOfCorrectAnswered+=1;
  }else
  numberOfWrongAnswered-=1
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
     numberOfCorrectAnswered+=1;
  }else
  numberOfWrongAnswered-=1
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
     numberOfCorrectAnswered+=1;
  }else
  numberOfWrongAnswered-=1
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
     numberOfCorrectAnswered+=1;
  }else
  numberOfWrongAnswered-=1
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
     numberOfCorrectAnswered+=1;
  }else
  numberOfWrongAnswered-=1
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