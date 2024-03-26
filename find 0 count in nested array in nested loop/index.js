var data =[[1,0,0,1,1],[0,1,0,0],[0,0,1]],count=0,one=0;

    for(var i=0;i<data.length;i++){
      for(var j=0;j<data[i].length;j++){
        if(data[i][j]==0){
            count++;
        }
        else if(data[i][j]==1){
            one++;
        }
    }
    }    


console.log(count)
console.log(one);
