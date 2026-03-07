//A javascript to reverse a string "Testleaf"
//Also find if the string is a palindrome

//Reverse teh string
let  call="Testleaf"
let length=call.length;
let reversed="";
for (i=length-1;i>=0;i--){
    reversed+=call.charAt(i);
        
    }
    console.log("The reversed string of Testleaf is " +reversed);
// Checking if it is a palindrome

if(call==reversed){
    console.log("This is a Palindrome");
}
else{
console.log("This is NOT a Palindrome");
}