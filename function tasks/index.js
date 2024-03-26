// function sample(a,b){
//     // ({a:b});
//     console.log({[a]:b});
// }
// sample('a','b');
// sample('z','x');
// sample('b','w');

// -------------------------------------------------------------------------------------

// function sample(a,b){
//     return b  in  a;
// }
// console.log(sample({a:10,b:30,c:10},'b')); 
// console.log(sample({x:'a',y:'b',z:'c'},'a'));
// console.log(sample({x:'a',y:'b',z:undefined},'z'));

// -----------------------------------------------------------------------------------------

// function sample(obj){
//     delete obj.b;
//     return console.log(obj)
// }
// sample({a:1,b:7,c:3});
// sample({b:0,a:7,d:8});
// sample({e:6,f:4,b:5,a:3});

// -----------------------------------------------------------------------------------

// function sample(a){
//     var c=[];
//      for(var i in a){
//         c.push(i);

//     };
//     console.log(c);
// }
// sample({a:1,b:2,c:3});
// sample({j:9,i:2,x:3,z:4});
// sample({w:15,x:22,y:13});

// -----------------------------------------------------------------------------------

// function myfunction(a,b){
//     var c;
//     if(a<b){
//         c=a/b
//     }
//     else if(a>b){
//         c=a*b
//     }
//     console.log(c)
// }
// myfunction(10,100);
// myfunction(90,45);
// myfunction(8,20);
// myfunction(2,0.5);

// ----------------------------------------------------------------------------------------------------

function sample(a){
    var add=0;

    for(var i in a){
        add+=a[i]
    }
    console.log(add);

}
sample({a:1,b:2,c:3});
sample({z:10,w:20,x:30,y:40});
sample({s:1,p:4,sp:3})
