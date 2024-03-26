// var count=0;

// for(i=1;i<=5;i+=2){
//     count++;
//     console.log(i);
//     console.log(count);
// }

var data = prompt("Enter your Username ").toLowerCase(),
space=0,dot=0,comma=0,special=0,char=0;

for(var i=0;i<=data.length;i++){
    if(data[i]==" "){
        space++;
    }
    else if(data[i]==","){
        comma++;
    }
    else if(data[i]=="."){
        dot++;
    }
    else if(data[i]=="@" || data[i]=="#" || data[i]=="$" || data[i]=="%" || data[i]=="*"){
        special++;
    }
    else if(data[i]=="a" || data[i]=="b" || data[i]=="c" || data[i]=="d" || data[i]=="e" || data[i]=="f" || data[i]=="g" || data[i]=="h" || data[i]=="i" || data[i]=="j" || data[i]=="k" || data[i]=="l" || data[i]=="m" || data[i]=="n" || data[i]=="o" || data[i]=="p" ||data[i]=="q" || data[i]=="r" || data[i]=="s" || data[i]=="t" || data[i]=="u" || data[i]=="v" || data[i]=="w" || data[i]=="x" || data[i]=="y" || data[i]=="z"){
        char++;
    }
};
var adding =space+dot+comma+special+char;

document.write(`You Enter : ${data} <br/>`)
document.write(`Space Count : ${space} <br/>`);
document.write(`Comma Count : ${comma}<br/>`);
document.write(`Dot Count : ${dot} <br/>`);
document.write(`Special Letters Count : ${special} <br/>`);
document.write(`Letters Count : ${char} <br/>`);

