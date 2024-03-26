


onresize=()=>{
    document.getElementById("h").innerHTML=window.screen.height;
    document.getElementById("w").innerHTML=window.screen.width;

    var a=window.screen.width


    if(a<=500){
        document.getElementById("view").innerHTML="mobile screen";
        
    }
    else if(a<=800){
        document.getElementById("view").innerHTML="tablet screen";

    }
    else if(a<=1400){
        document.getElementById("view").innerHTML="laptop screen";

    }
    else if(a<=4000){
        document.getElementById("view").innerHTML="desktop screen";

    }
};

onresize();
