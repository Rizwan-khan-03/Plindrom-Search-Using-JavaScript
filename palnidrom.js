// var values=""
var h1=document.querySelector('.ValueText');



function Myfunction(){
var input=document.getElementById('input');
// console.log(input)
// var inputValue=input.value

palindrom(input.value)

}

function palindrom(word){
var letters=[];

var reversWord="";
// word into letters array,,whic is our stack
for (var i=0;i< word.length;i++){
    letters.push(word[i])
    // console.log(word)
}

 // off the stack in reverse order 
for (var i=0; i< word.length;i++){
    reversWord += letters.pop()
    // console.log(reversWord)
}
if(!word){
    h1.innerHTML="";
}
else if(reversWord === word){
    console.log(word + " :"+"word is palindrom");
    h1.innerHTML=word.toUpperCase() + " : "+"word is palindrom"
}
else{
    console.log(word + + " :"+"not a  palindrom");
    h1.innerHTML=word.toUpperCase() +  " :"+"not a  palindrom"

}
// console.log(letters)
}


 