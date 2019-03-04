var sec=document.querySelector('.clockSecWrapper');
var min=document.querySelector('.clockMinWrapper');
var hour=document.querySelector('.clockHourWrapper');


var data=new Date();
var s=data.getSeconds();
var m=data.getMinutes();
var h=data.getHours();

var sRot=6*s;
var mRot=6*m+(s*0.1);
var hRot=30*h+(m*0.5);



const clock = () =>{
    sec.style="transform:rotate(+"+sRot+"deg)";
    min.style="transform:rotate(+"+mRot+"deg)";
    hour.style="transform:rotate(+"+hRot+"deg)";
    sRot+=(360/60);
    mRot+=(360/(60*60));
    hRot+=(360/(12*60*60));
    setTimeout(clock, 1000);
}
window.onload = clock;
// setInterval(clock, 1000);