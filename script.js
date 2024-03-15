let seconds=0;
let tens=0;
let minutes=0;
let getSec=document.querySelector(".sec");
let getTen=document.querySelector(".min");
let getMins=document.querySelector(".minutes");
//buttons
let start=document.querySelector(".start");
let stop=document.querySelector(".stop");
let reset=document.querySelector(".reset");
let interval;
//functions

 
function startWatch()
{
    tens++;
    if(tens<=9){
        getTen.innerHTML= '0'+tens;
    }
    if(tens>9){
        getTen.innerHTML=tens;
    }
    if(tens>99)
    {  seconds++;
        getSec.innerHTML='0'+seconds;
        tens=0;
        getTen.innerHTML='0'+0;
    }
    if(seconds>9)
    {
        getSec.innerHTML=seconds;
    }
   
}
reset.addEventListener("click",()=>{
    clearInterval(interval);
 tens="00";
 seconds="00";
 minutes="00";
 getSec.innerHTML=seconds;
 getTen.innerHTML=tens; 
 getMins.innerHTML=minutes;
 })
 stop.addEventListener("click",()=>{
        clearInterval(interval);
 })
 start.addEventListener("click",()=>{
    interval=setInterval(startWatch,10);
 }
 )