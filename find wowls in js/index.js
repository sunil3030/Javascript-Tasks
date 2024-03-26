var data = prompt("Enter the string");

var a=0,e=0,i=0,o=0,u=0;

for(var j in data){
    if(data[j]=="a"){
         a=1;
    }
    else if(data[j]=="e"){
        e=1;
    }
    else if(data[j]=="i"){
        i=1;
    }
    else if(data[j]=="o"){
        o=1;
    }
    else if(data[j]=="u"){
        u=1;
    }
    // console.log(data[j])
};

console.log(`${data}`);
console.log(`a - ${a} `);
console.log(`e - ${e} `);
console.log(`i - ${i} `);
console.log(`o - ${o} `);
console.log(`u - ${u} `);