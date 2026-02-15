

for(var i=0;i<10;i++){
var new_= document.createElement("div");
new_.innerHTML="❤️"
new_.classList.add("heart");
document.querySelector(".container").appendChild(new_);
}
var balls=document.getElementsByClassName("heart");
let position=[];
let speed=[]
let direction=[];
let screenWidth=window.innerWidth;

for(var i=0;i<balls.length;i++){
 
    
    //  var interval=Math.floor(Math.random()*2)+50;
  
    var random=Math.floor(Math.random()*screenWidth)+1;
    if(i%2===0){
        position[i]=random;
        direction[i]=1;
    }
    else{
        direction[i]=-1;
        position[i]=random;
       
    }

}

function animateheart(){

    for(var i=0;i<balls.length;i++){
    speed[i]=Math.floor(Math.random()*1)+1;
            position[i]+=speed[i]*direction[i];
            balls[i].style.marginLeft=position[i]+"px";
           
        if(screenWidth-45 <=position[i] || position[i]<=0){
            position[i]=Math.floor(Math.random()*screenWidth)+1;
            
            direction[i] *=-1;
        }

        }
       requestAnimationFrame(animateheart);


}
animateheart();