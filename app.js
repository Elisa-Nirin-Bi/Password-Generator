
let alphabeticCharacter = "!#$%&()*+,-./:;<=>?@[/]^_`{|}~0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
let alphabeticCharacterLength = alphabeticCharacter.length;
const element = document.querySelector('.finalResult');

document.getElementById('createPassword').addEventListener('click',

 function createPassword(){
    let result = "";
    for (let i = 0; i <8; i++ ){
      result += alphabeticCharacter.charAt(Math.floor(Math.random()* alphabeticCharacterLength));
    }
 
  element.value = result;

  document.querySelector('.finalResultBtn').addEventListener('click', function(){
    element.select();
    document.execCommand("copy");
  });
  
});

document.querySelector('.clearResultBtn').addEventListener('click', function(){
  element.value = '';
});