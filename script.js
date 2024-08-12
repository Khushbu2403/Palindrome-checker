let result= document.getElementById("result");
let input= document.getElementById("text-input");
let button= document.getElementById("check-btn");

button.addEventListener("click",() => palindromeChecker(input.value));

function palindromeChecker(str){
  if(str.length == 0){
   alert("Please input a value");
  }else{
  let string=suitableStr(str);
  for(let i =1; i<=string.length; i++){
    if(string[i-1]==string[string.length-i]){
      result.innerText=`${str} is a palindrome`;
      input.value="";
    }else if(string[i-1]!=string[string.length-i]){
      result.innerText=`${str} is not a palindrome`;
      input.value="";
      return;
    }
  }  
  }
}

function suitableStr(str){
  const regex = /[^a-z0-9A-Z]/gi;
  return str.replace(regex, "").toLowerCase();
}
