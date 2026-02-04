
let footer=document.querySelector('footer')
footer.style.left=window.innerWidth/2+'px'
let audio=false;
var random_song=["/Animation_dom/song4.mp3","/Animation_dom/song1.mp3","/Animation_dom/song2.mp3","/Animation_dom/song3.mp3"];

document.querySelector("button").addEventListener("click",function(){
  
var random_no=Math.floor(Math.random()*4);
if(audio){
    audio.pause();
}
     audio=new Audio(random_song[random_no]);
    audio.play();

    });
/*             Adding LIve time and Date                                      */
function setTime()
{
let date =(new Date()).toLocaleString('default',{
    day:"numeric",
    month:"short",
    year:"numeric",
    hour:"numeric",
    minute:"numeric"
})
document.querySelector(".date").innerHTML=date

}



// for(var i=0;i<10;i++){
// var new_= document.createElement("div");
// new_.innerHTML="❤️"
// new_.classList.add("ball");
// document.querySelector(".container").appendChild(new_);
// }
// var balls=document.getElementsByClassName("ball");
// let position=[];
// let speed=[]
// let direction=[];
// let screenWidth=window.innerWidth;

// for(var i=0;i<balls.length;i++){
 
    
//     //  var interval=Math.floor(Math.random()*2)+50;
  
//     var random=Math.floor(Math.random()*screenWidth)+1;
//     if(i%2===0){
//         position[i]=random;
//         direction[i]=1;
//     }
//     else{
//         direction[i]=-1;
//         position[i]=random;
       
//     }

// }

// function animateheart(){

//     for(var i=0;i<balls.length;i++){
//     speed[i]=Math.floor(Math.random()*1)+1;
//             position[i]+=speed[i]*direction[i];
//             balls[i].style.marginLeft=position[i]+"px";
           
//         if(screenWidth-45 <=position[i] || position[i]<=0){
//             position[i]=Math.floor(Math.random()*screenWidth)+1;
            
//             direction[i] *=-1;
//         }

//         }
//        requestAnimationFrame(animateheart);


// }
// animateheart();
setInterval(setTime,1000);
