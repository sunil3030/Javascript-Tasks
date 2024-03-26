var a=Number(prompt("Enter A Value"));
b=Number(prompt("Enter B Value"));
cal=prompt("What is your Need \n" +   "1) Add \n" +  "2) Sub \n" + "3) Multiply \n"  + "4) Division ").toLowerCase();

if(cal=="add"){
    document.write( a+b + " is the answer");
}
else if(cal=="sub"){
    document.write(a-b + " is the answer");
}
else if(cal=="multiply"){
    document.write(a*b + " is the answer");
}
else if(cal=="division"){
    document.write(a/b + " is the answer");
}
else{
    document.write(" You are Input a Invalid Data")
};