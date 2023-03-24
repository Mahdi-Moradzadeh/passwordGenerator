// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}


function generatePassword(){
  
  var promAns = [0, "firstAns", "secondAns", "thirdAns", "fourthAns"];
  var content = [];
  var numeric =["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var characters = ["!", "@", "#", "$", "%", "^", "&", "*"];
  var upCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lowCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var outPass = "";
  var randGen;


  while(promAns[0] < 8 || promAns[0] > 128){
    promAns[0] = prompt("Enter the length of your password","Between 8 to 128 characters");
  }
  while(promAns[1]!="Y" && promAns[1]!="y" && promAns[1]!="n" && promAns[1]!="N"){
    promAns [1] = prompt("Do you want numbers in your password", "Y or N");
  } 

  while(promAns[2]!="Y" && promAns[2]!="y" && promAns[2]!="n" && promAns[2]!="N"){
    promAns [2] = prompt("Do you want lowercase in your password", "Y or N");
  }

  while(promAns[3]!="Y" && promAns[3]!="y" && promAns[3]!="n" && promAns[3]!="N"){
      promAns [3] = prompt("Do you want uppercase in your password", "Y or N");
  }

  while(promAns[4]!="Y" && promAns[4]!="y" && promAns[4]!="n" && promAns[4]!="N"){
    promAns [4] = prompt("Do you want special characters in your password,  i.e ! @ # $ % ^ & *", "Y or N");
  }


  if(promAns[1]=="y" || promAns[1]=="Y"){
  content = content.concat(numeric);
  }

  if(promAns[2]=="y" || promAns[2]=="Y"){
  content = content.concat(lowCase);
  }

  if(promAns[3]=="y" || promAns[3]=="Y"){
    content = content.concat(upCase);
  }

  if(promAns[4]=="y" || promAns[4]=="Y"){
  content = content.concat(characters);
  }

  for(var i = 0; i < promAns[0]; i++){
    randGen = content[Math.floor(Math.random() * content.length)];
    outPass = outPass.concat(randGen);
    }
    return outPass;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


