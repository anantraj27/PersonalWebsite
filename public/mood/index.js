
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

let editorText = document.querySelector(".editorText");
let styles = document.querySelector(".style");

if ('virtualKeyboard' in navigator) {
   // The VirtualKeyboard API is supported!
   editorText.focus();

   navigator.virtualKeyboard.overlaysContent = true;
   console.log(navigator.virtualKeyboard.overlaysContent = true)


   navigator.virtualKeyboard.addEventListener('geometrychange', (event) => {
      const { x, y, width, height } = event.target.boundingRect;

      if (height > 0) {

      //  editorText
      textarea.style.marginBottom = `${height}px`;
      textarea.style.height = `calc(100% - ${height}px)`;
      }
      else {
     textarea.style.marginBottom = '0px';
      textarea.style.height = '100%';

      }
      console.log('Virtual keyboard geometry changed:', x, y, width, height);
   });

}

editorText.addEventListener('click', () => {
   
      // The VirtualKeyboard API is supported!
      
      navigator.virtualKeyboard.show();  /// here not puttin  gememotry bcz as many times ... click click gemotry triggered leads to leakage of memory 
   
});














//    #    capsule styling codes ................
const choose1 = document.querySelector(".choose1");
const choose2 = document.querySelector(".choose2");
const category = document.querySelector(".category");
const mood = document.querySelector(".mood");
if (choose1) {

   choose1.addEventListener('click', () => {
      mood.style.display = "none";
      choose2.classList.remove("open");
      mood.style.transform = 'translateY(8px)';
      choose1.classList.toggle("open")
      // Object.assign(category.style, {
      //    position: "absolut",
      //    display: 'block',
      //    top: 0
      // });


      if (category.style.display === "block") {
         category.style.display = "none";
      } else {
         category.style.display = "block";
      }


      //    document.addEventListener("click",()=>{
      //         category.style.display = "none";

      // })

   });

}
let category_list = ['study', 'personal', 'idea']
let category_color_list = [' rgba(172, 255, 47, 0.662)', ' rgba(189, 29, 189, 0.884)', 'rgba(61, 61, 199, 0.473)']


const label1 = document.querySelector(".label1");
let state = -1;
category_list.forEach((element, j) => {

   let value1 = document.querySelector(`.${element}`);
   value1.addEventListener("click", (e) => {

      if (state === j) {
         state = -1;
         label1.textContent = 'Choose Category :';
         choose1.style.backgroundColor = ' rgba(128, 128, 128, 0.458)';
         value1.style.backgroundColor = "";

      }
      else {
         if (state != -1) {

            let elements = document.querySelector(`.${category_list[state]}`)
            elements.style.backgroundColor = '';

         }
         label1.textContent = value1.textContent;
         choose1.style.backgroundColor = category_color_list[j];
         value1.style.backgroundColor = category_color_list[j]

         state = j;
      }

      choose1.classList.remove("open");
      category.style.display = "none";
      e.stopPropagation();
   });
});


let mood_list = ['happy', 'motivated', 'normal', 'romantic']
let mood_count = [0, 0, 0, 0];
let mood_color_list = ['rgba(172, 255, 47, 0.789)', ' rgb(128, 36, 36)', 'rgb(108, 108, 180)', 'rgba(255, 192, 203, 0.559)']
// let updated_mood_color=["rgb(33, 19, 19)","rgb(33, 19, 19)","rgb(33, 19, 19)","rgb(33, 19, 19)"]
const label = document.querySelector(".label");
let hit_index = -1;

mood_list.forEach((element, i) => {

   let value = document.querySelector(`.${element}`)
   console.log(value)
   value.addEventListener("click", (e) => {

      if (hit_index == i) {
         hit_index = -1;
         label.textContent = 'Choose mood :';
         choose2.style.backgroundColor = ' rgba(128, 128, 128, 0.458)';
         value.style.backgroundColor = ''
      }
      else {

         label.textContent = value.textContent;
         choose2.style.backgroundColor = mood_color_list[i];
         if (hit_index >= 0 && hit_index != i) {
            let clicked_element = document.querySelector(`.${mood_list[hit_index]}`)
            console.log("clicked element", clicked_element)
            clicked_element.style.backgroundColor = ''
         }

         value.style.backgroundColor = mood_color_list[i];
         hit_index = i;

      }


      choose2.classList.remove("open");

      mood.style.display = "none";
      e.stopPropagation();
   });
})


if (choose2) {

   choose2.addEventListener('click', () => {

      choose1.classList.remove("open");
      category.style.display = "none";
      choose2.classList.toggle("open")

      if (mood.style.display === "block") {
         mood.style.display = "none";

      } else {
         mood.style.display = "block";

      }
   });
}


// document.body.addEventListener("click",()=>{
//  if (category.style.display === "block") {
//          category.style.display = "none";
//       }
//    if (mood.style.display === "block") {
//          mood.style.display = "none";
//       }
// })





const backArrow = document.querySelector(".backArrow");
const newnotes = document.querySelector(".newnotes");
const save = document.querySelector(".save");


const listScreen = document.querySelector(".listScreen");
///............................ checking listsscreen page ................
if (listScreen) {

   (async () => {

      const data1 = await axios.get("/getNotes", {
         withCredentials: true
      })

      const values = data1.data;


      //               #  if notes saveed in database ....

      if (data1) {
         values.forEach(element => {

            const title_list = document.createElement("div");
            title_list.classList.add("title");
            // title_list.setAttribute("id", element.id);
            title_list.innerHTML = element.title;
            listScreen.querySelector("header").appendChild(title_list);

            title_list.addEventListener('click', async function () {


               ///              # putting notes in notepad related to titles .....

               openEditor1();
               console.log(title_list.innerHTML)

               const data2 = await axios.get("/getNotes", {
                  params: {

                     title: title_list.innerHTML


                  }
               })

               console.log(data2.data[0].title)
               const title = data2.data[0].title;
               const text = data2.data[0].text;
               document.querySelector(".editorTitle").value = title;

               document.querySelector(".editorText").innerHTML = text;




            })


         });
      }



   })();   ////  * Imediately invoked on openeing notepad ..... (IIFO) FUNCTION ...

   // const title = document.querySelectorAll(".title");
   // console.log("hii titl ",title)

   // title.forEach(element => {

   //    element.addEventListener('click',async function (){

   //    //    openEditor();


   //    // })

   // });



}

//..................................................................




if (newnotes) {
   newnotes.addEventListener("click", function openEditor() {
      document.querySelector(".listScreen").style.display = "none";
      document.querySelector(".editorScreen").style.display = "block";
      if (document.querySelector(".editorTitle").value) {
         document.querySelector(".editorTitle").value = ''
      }
      if (document.querySelector(".editorText").value) {
         document.querySelector(".editorText").value = ''
      }
      async function handleAction() {

         const title = document.querySelector(".editorTitle");
         const text = document.querySelector(".editorText");

         let titleValue = title.value;
         const textValue = text.value;

         if (!titleValue) {
            titleValue = 'nan';
         }

         const { data } = await axios.post("/add", {
            title: titleValue,
            text: textValue
         })
         console.log(data.notes)
         if (data.success) {
            alert(data.message);
            location.href = "/notes";

         }
      };
      if (save) {
         save.addEventListener("click", handleAction)
      }
      if (backArrow) {
         backArrow.addEventListener("click", handleAction);
         backArrow.addEventListener("click", goBack);
      }

   });
}

function openEditor1() {
   document.querySelector(".listScreen").style.display = "none";
   document.querySelector(".editorScreen").style.display = "block";


   if (backArrow) {

      backArrow.addEventListener("click", goBack);
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
