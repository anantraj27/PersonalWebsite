
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




setInterval(setTime,1000);
