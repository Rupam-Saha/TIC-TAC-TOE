const con=document.querySelector(".container");
var t ="X";

function turn(){
    if(t==="X")
        return "0";
    else
        return "X";
}

function checkwin(){
    if(document.querySelector("#b0").innerText=="X" && document.querySelector("#b1").innerText=="X" && document.querySelector("#b2").innerText=="X")
        return 1;
    else if(document.querySelector("#b0").innerText=="X" && document.querySelector("#b3").innerText=="X" && document.querySelector("#b6").innerText=="X")
        return 1;
    else if(document.querySelector("#b8").innerText=="X" && document.querySelector("#b7").innerText=="X" && document.querySelector("#b6").innerText=="X")
        return 1;
    else if(document.querySelector("#b5").innerText=="X" && document.querySelector("#b2").innerText=="X" && document.querySelector("#b8").innerText=="X")
        return 1;
    else if(document.querySelector("#b1").innerText=="X" && document.querySelector("#b4").innerText=="X" && document.querySelector("#b7").innerText=="X")
        return 1;
    else if(document.querySelector("#b0").innerText=="X" && document.querySelector("#b4").innerText=="X" && document.querySelector("#b8").innerText=="X")
        return 1;
    else if(document.querySelector("#b6").innerText=="X" && document.querySelector("#b4").innerText=="X" && document.querySelector("#b2").innerText=="X")
        return 1;
    else if(document.querySelector("#b0").innerText=="0" && document.querySelector("#b1").innerText=="0" && document.querySelector("#b2").innerText=="0")
        return 0;
    else if(document.querySelector("#b1").innerText=="0" && document.querySelector("#b4").innerText=="0" && document.querySelector("#b7").innerText=="0")
        return 0;
    else if(document.querySelector("#b0").innerText=="0" && document.querySelector("#b3").innerText=="0" && document.querySelector("#b6").innerText=="0")
        return 0;
    else if(document.querySelector("#b8").innerText=="0" && document.querySelector("#b7").innerText=="0" && document.querySelector("#b6").innerText=="0")
        return 0;
    else if(document.querySelector("#b5").innerText=="0" && document.querySelector("#b2").innerText=="0" && document.querySelector("#b8").innerText=="0")
        return 0;
    else if(document.querySelector("#b0").innerText=="0" && document.querySelector("#b4").innerText=="0" && document.querySelector("#b8").innerText=="0")
        return 0;
    else if(document.querySelector("#b6").innerText=="0" && document.querySelector("#b4").innerText=="0" && document.querySelector("#b2").innerText=="0")
        return 0;
    else if(document.querySelector("#b0").innerText!="" && document.querySelector("#b1").innerText!="" && document.querySelector("#b2").innerText!="" && document.querySelector("#b3").innerText!="" && document.querySelector("#b4").innerText!="" && document.querySelector("#b5").innerText!="" && document.querySelector("#b6").innerText!="" && document.querySelector("#b7").innerText!="" && document.querySelector("#b8").innerText!="")
        return 2;
    else
        return -1;
}
document.querySelector("#btn0").addEventListener("click",()=>{
        put(document.querySelector("#b0"));
});
document.querySelector("#btn1").addEventListener("click",()=>{
    put(document.querySelector("#b1"));
});
document.querySelector("#btn2").addEventListener("click",()=>{
    put(document.querySelector("#b2"));
});
document.querySelector("#btn3").addEventListener("click",()=>{
    put(document.querySelector("#b3"));
});
document.querySelector("#btn4").addEventListener("click",()=>{
    put(document.querySelector("#b4"));
});
document.querySelector("#btn5").addEventListener("click",()=>{
    put(document.querySelector("#b5"));
});
document.querySelector("#btn6").addEventListener("click",()=>{
    put(document.querySelector("#b6"));
});
document.querySelector("#btn7").addEventListener("click",()=>{
    put(document.querySelector("#b7"));
});
document.querySelector("#btn8").addEventListener("click",()=>{
    put(document.querySelector("#b8"));
});


function put(x){
   //console.log(x.innerText);
   x.innerText=t;
   var res=checkwin();
   if(res==1){
      document.querySelector(".won h4").innerText="player 1 won";
      reset();
   }
   else if(res==0){
      document.querySelector(".won h4").innerText="player 2 won";
      reset();
   }
   else if(res==2){
      document.querySelector(".won h4").innerText="draw match";
      reset()
   }
   t=turn();
}

document.querySelector("#btn").addEventListener("click",reset1);

function reset()
{
    document.querySelector("#b0").innerText="";
    document.querySelector("#b1").innerText="";
    document.querySelector("#b2").innerText="";
    document.querySelector("#b3").innerText="";
    document.querySelector("#b4").innerText="";
    document.querySelector("#b5").innerText="";
    document.querySelector("#b6").innerText="";
    document.querySelector("#b7").innerText="";
    document.querySelector("#b8").innerText="";
    //document.querySelector(".won h4").innerText="";  
}

function reset1()
{
    document.querySelector("#b0").innerText="";
    document.querySelector("#b1").innerText="";
    document.querySelector("#b2").innerText="";
    document.querySelector("#b3").innerText="";
    document.querySelector("#b4").innerText="";
    document.querySelector("#b5").innerText="";
    document.querySelector("#b6").innerText="";
    document.querySelector("#b7").innerText="";
    document.querySelector("#b8").innerText="";
    document.querySelector(".won h4").innerText="";
    t="X";  
}