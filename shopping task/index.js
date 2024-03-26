

var data = prompt("Enter Your Need : \n Vegetables OR Fruits ").toLowerCase();

shop = [
    vegetables={
       vegname : "beens",price:"20 RS",
        vegname :"carrot",price:"40 RS",
        vegname :"beettroot",price:"30 RS",
        vegname :"tomato",price:"35 RS"
    },
    fruits={
        fruitname:"apple",price:"120 RS",
        fruitname:"banana",price:"80 RS",
        fruitname:"grapes",price:"100 RS",
        fruitname:"pomogranet",price:"90 RS"
    }
];


for(var i in shop){
    if(data=="vegetables"){
        console.log(shop[0]);
        break;
        
    }
    else if(data=="fruits"){
        console.log(shop[1]);
        break;
        }
    else{
        console.log(`Enter a Valid data`);
    }
};
// console.log(i)