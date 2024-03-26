

// function sample(a,b){
//       var count=0;

//     for(var i=0;i<a.length;i++){
//         for(var j=i;j<b.length;j++){
//             if(a[i]==b[j]){
//                 count++;
//             }
//         }
//     }
//     return console.log(count);
// }
// sample('m',"how many times does the character occur in this sentence?");
// sample('h',"how many time does the character occur in this sentence?");
// sample('?',"how many time does the character occur in this sentence?");
// sample('z',"how many time does the character occur in this sentence?");

// ------------------------------------------------------------------------------------------


// function myfunction(a){
//     // var count=0;

//       for(var i=0;i<a.length;i++){
          
//       }
//       return console.log(i);
// }

// myfunction([1,2,3,4]);
// myfunction([9,0,3,5,4,3,3,4,5]);
// myfunction([1,2,3,4,5,6]);

// ------------------------------------------------------------------------------------------------------


// function sample(a){
//     var data=[];

//     for(var i=0;i<3;i++){
//         data.push(a[i])
//     }

//     return console.log(data);
// }

// sample([1,2,3,4,5]);
// sample([99,0,3]);
// sample([33,3,3]);

// ---------------------------------------------------------------------------------------------------

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

// ------------------------------------------------------------------------------------------------

function sample(a,b){
  var obj={};
           for(var i=0;i<a.length;i++){

                 for(var j=i;j<=i;j++){

                  
                 obj=(`${a[i]} : ${b[j]}`);
      console.log(obj);

               }

           }

}
sample(["a","b","c"],[1,2,3]);
sample(["w","t","y","z"],[3,4,5,6]);
sample(["a",2],[1,"b"]);

