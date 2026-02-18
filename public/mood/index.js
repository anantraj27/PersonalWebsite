
// function createheart() {
//     for (var i = 0; i < 10; i++) {
//         var new_ = document.createElement("div");
//         new_.innerHTML = "❤️"

//         new_.classList.add("heart");
//         document.querySelector(".container").appendChild(new_);
//     }
//     var balls = document.getElementsByClassName("heart");



//     let position = [];
//     let speed = []
//     let direction = [];
//     let screenWidth = window.outerWidth;
// console.log(screenWidth)
//     for (var i = 0; i < balls.length; i++) {


//         //  var interval=Math.floor(Math.random()*2)+50;

//         var random = Math.floor(Math.random() * screenWidth) + 1;
//         if (i % 2 === 0) {
//             position[i] = random;
//             direction[i] = 1;
//         }
//         else {
//             direction[i] = -1;
//             position[i] = random;

//         }

//     }

//     function animateheart() {

//         for (var i = 0; i < balls.length; i++) {
//             speed[i] = Math.floor(Math.random() * 1) + 1;
//             position[i] += speed[i] * direction[i];
//             if (position[i] === screenWidth) {
//                 balls.remove()
//             }
//             balls[i].style.marginLeft = position[i] + "px";

//             if (screenWidth - 45 <= position[i] || position[i] <= 0) {
//                 position[i] = Math.floor(Math.random() * screenWidth) + 1;
//                 if (position[i] === screenWidth) {
//                     balls.remove()
//                 }
//                 direction[i] *= -1;
//             }

//         }
//         requestAnimationFrame(animateheart);


//     }
//     animateheart();
// }
// createheart()
const backArrow = document.querySelector(".backArrow");
const newnotes = document.querySelector(".newnotes");
const save = document.querySelector(".save");

if (backArrow) {
   backArrow.addEventListener("click", goBack);
}

if (newnotes) {
   newnotes.addEventListener("click", openEditor);
}

if (save) {
   save.addEventListener("click", async () => {

      const title = document.querySelector(".editorTitle");
      const text = document.querySelector(".editorText");

      let titleValue = title.value;
      const textValue = text.value;

      if (!titleValue) {
         titleValue = 'nan';
      }
      console.log(titleValue)

      const { data } = await axios.post("/add", {
         title: titleValue,
         text: textValue
      })

      if (data.success) {
         alert(data.message);
      }






      console.log(title.value, text.value);

   });
}

function openEditor() {
   document.querySelector(".listScreen").style.display = "none";
   document.querySelector(".editorScreen").style.display = "block";
   if (document.querySelector(".editorTitle").value) {
      document.querySelector(".editorTitle").value = ''
   }
   if (document.querySelector(".editorText").value) {
      document.querySelector(".editorText").value=''
   }

}

function goBack() {
   document.querySelector(".listScreen").style.display = "block";
   document.querySelector(".editorScreen").style.display = "none";
}



//    if(!title.value){
//      titlevalue= 'nan';
//    }
//   if(text.value){
//   await axios.post("http://localhost:3000/notes",{
//    title:titlevalue,
//    text:text.value
//   })
//   alert("saved")
//   }
// })
// function createheart(){

//     const heart = document.createElement('div');
//     heart.innerHTML="❤️";
//     heart.classList.add("heart");
//     heart.style.left=Math.random()*90 +"vw";
//     heart.style.animationDuration = (3 + Math.random()*5) +'s'
//     heart.style.fontSize =(15 + Math.random()*25) + "px";
//    document.getElementById("heart-layer").appendChild(heart);
//  setTimeout(()=>{
//     heart.remove();
//  },9000)

// }
// setInterval(createheart ,300);


/// data mining 
