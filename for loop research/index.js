// var data =prompt("Enter the table you want")

// for(i=1;i<=20;i++){
//     console.log(`${i} x${data}= ${i*data}`);
//     document.write(`${i}x${data}=${i*data}`);
// };

var data=Number(prompt("Enter the number"));

for(i=0;i<=data;i++){
    if(i%2==0){
        console.log(`${i}  is a even number`)
        document.write(`${i}  is a even number`);
    }else{
        document.write(`${i} is a odd number`);
        console.log(`${i} is a odd number`)
    }
}



