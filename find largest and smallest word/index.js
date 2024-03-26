var data = ["mango","apple","banana","jackfruit","watermilen","kiwi"],check=data[0],small=data[2];

for(var i of data){
    if(check.length<i.length){
        check=i;
    }else if(i.length<small.length){
        small=i;
    }
};


console.log(data);
console.log(`${check} is the largest word in the array`);
console.log(`${small} is the smallest word in the arrary`);


