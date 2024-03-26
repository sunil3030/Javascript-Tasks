var account = prompt("Enter your Debit Card Number")

if(account==3333){
    need = prompt("Enter your Need")
    if(need=="withdraw"){
      amount=prompt("Enter the Amount")
      if(amount<=20000){
     document.write("Please Collect your cash")}
      
      else{
        document.write("Please Enter the Amount less than 20000 Rs")
      }}
    else if(need=="balance enquiry"){
      pin=prompt("Enter your PIN Number")
     if(pin==1234){
     document.write("your balance is 0 Rs")}
     }
    else if(need=="deposite"){
      cash=prompt("enter the amount")
    if(cash<=20000){
     document.write("deposite your money here")}
    }
    else{
        document.write("Please Enter your Need <br/> withdraw  (or) <br/> balance enquiry (or) <br/> deposite")
    }
}
else{
    document.write("Invalid Card Number")
}