// var concat = "";

// for(var i=1; i<=5; i++) {
    
//     console.log(concat);
    
//     for(var j=1; j<=i; j++) {
//         concat+=j;
//         console.log(concat , "Inside Loop");
//     }
//     console.log("----------------- outter loop");
//     concat+="*";
// };

// console.log(concat);

// var concat = " ";

// for(var i=1; i<=5; i++) {
//     // concat = " 1*12*123*1234*"
//     for(var j=1; j<=i; j++) {
//         concat+=j; // concat= concat+j => " 1*12*123*" + 1  => " 1*12*123*1"
//         //j++ => j => 1++ => 2 
//     }
//     // concat = " 1*12*123*1234*12345"
//     concat+="\n"; // concat = concat+"" =>  " 1*12*123" + "" => " 1*12*123*" 
//      /* concat = " 1\n
//                    12\n
//                    123\n
//                    1234\n
//                    12345\n" */
//     //i++ // i = i+1 => 5+1 => 6
// };

// console.log(concat);

var concat="";

for(var i=5;i>=1;i--){

  for(var j=i;j>=1;j--){
      concat+=j;
  }
  concat+="\n";
};
console.log(concat);