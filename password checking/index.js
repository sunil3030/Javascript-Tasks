
var i=0;

do{
    var data=prompt("Enter the password");

    if(data=="12345"){
         console.log("Login Successful");
         break;
    }
    else if(i<2){
        console.log("Password Incorrect try again");
        
    }
    else{
        console.log(`try again 24 hours later your attempt is over`);
    }
    i++;
console.log(i);

    
}while(i<3);