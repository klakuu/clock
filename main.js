const sec=document.querySelector('.clockSecWrapper');
const min=document.querySelector('.clockMinWrapper');
const hour=document.querySelector('.clockHourWrapper');

const clock = () =>{
    let data=new Date();
    let s=data.getSeconds();
    let m=data.getMinutes();
    let h=data.getHours();
    
    let sRot=6*s;
    let mRot=6*m+(s*0.1);
    let hRot=30*h+(m*0.5);
    
    sec.style="transform:rotate(+"+sRot+"deg)";
    min.style="transform:rotate(+"+mRot+"deg)";
    hour.style="transform:rotate(+"+hRot+"deg)";
    setTimeout(clock, 1000);
}
window.onload = clock;