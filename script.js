const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordLength = 12;

let firstBox = document.getElementById("first-passowrd");
let secondBox = document.getElementById("second-password");

function generate() {
   let firstPassword = " "
   for (let i = 0; i < passwordLength; i++) {
      let randomPassword = Math.floor(Math.random() *characters.length);
      firstPassword += characters[randomPassword];
   }
   firstBox.textContent = firstPassword;

   let secondPassword = " "
   for (let i = 0; i < passwordLength; i++) {
      let randomPassword = Math.floor(Math.random() *characters.length);
      secondPassword += characters[randomPassword];
   }
   secondBox.textContent = secondPassword;
}