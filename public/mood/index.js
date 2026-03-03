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

let styles = document.querySelector('.style');
window.visualViewport.addEventListener('resize', () => {
    const keyboardHeight = Math.max(0, window.innerHeight - window.visualViewport.height);

    editorText.style.paddingBottom = keyboardHeight + 'px';
});

//    #    capsule styling codes ................
const choose1 = document.querySelector('.choose1');
const choose2 = document.querySelector('.choose2');
const category = document.querySelector('.category');
const mood = document.querySelector('.mood');
if (choose1) {
    choose1.addEventListener('click', () => {
        mood.style.display = 'none';
        choose2.classList.remove('open');
        mood.style.transform = 'translateY(8px)';
        choose1.classList.toggle('open');
        // Object.assign(category.style, {
        //    position: "absolut",
        //    display: 'block',
        //    top: 0
        // });

        if (category.style.display === 'block') {
            category.style.display = 'none';
        } else {
            category.style.display = 'block';
        }
    });
}
let category_list = ['study', 'personal', 'idea'];
let category_color_list = [
    ' rgba(172, 255, 47, 0.662)',
    ' rgba(189, 29, 189, 0.884)',
    'rgba(61, 61, 199, 0.473)',
];

const label1 = document.querySelector('.label1');
let state = -1;
category_list.forEach((element, j) => {
    let value1 = document.querySelector(`.${element}`);
    value1.addEventListener('click', (e) => {
        if (state === j) {
            state = -1;
            label1.textContent = 'Choose Category :';
            choose1.style.backgroundColor = ' rgba(128, 128, 128, 0.458)';
            value1.style.backgroundColor = '';
        } else {
            if (state != -1) {
                let elements = document.querySelector(`.${category_list[state]}`);
                elements.style.backgroundColor = '';
            }
            label1.textContent = value1.textContent;
            choose1.style.backgroundColor = category_color_list[j];
            value1.style.backgroundColor = category_color_list[j];

            state = j;
        }

        choose1.classList.remove('open');
        category.style.display = 'none';
        e.stopPropagation();
    });
});

let mood_list = ['happy', 'motivated', 'normal', 'romantic'];
let mood_count = [0, 0, 0, 0];
let mood_color_list = [
    'rgba(172, 255, 47, 0.789)',
    ' rgb(128, 36, 36)',
    'rgb(108, 108, 180)',
    'rgba(255, 192, 203, 0.559)',
];
// let updated_mood_color=["rgb(33, 19, 19)","rgb(33, 19, 19)","rgb(33, 19, 19)","rgb(33, 19, 19)"]
const label = document.querySelector('.label');
let hit_index = -1;

mood_list.forEach((element, i) => {
    let value = document.querySelector(`.${element}`);
    console.log(value);
    value.addEventListener('click', (e) => {
        if (hit_index == i) {
            hit_index = -1;
            label.textContent = 'Choose mood :';
            choose2.style.backgroundColor = ' rgba(128, 128, 128, 0.458)';
            value.style.backgroundColor = '';
        } else {
            label.textContent = value.textContent;
            choose2.style.backgroundColor = mood_color_list[i];
            if (hit_index >= 0 && hit_index != i) {
                let clicked_element = document.querySelector(`.${mood_list[hit_index]}`);
                console.log('clicked element', clicked_element);
                clicked_element.style.backgroundColor = '';
            }

            value.style.backgroundColor = mood_color_list[i];
            hit_index = i;
        }

        choose2.classList.remove('open');

        mood.style.display = 'none';
        e.stopPropagation();
    });
});

if (choose2) {
    choose2.addEventListener('click', () => {
        choose1.classList.remove('open');
        category.style.display = 'none';
        choose2.classList.toggle('open');

        if (mood.style.display === 'block') {
            mood.style.display = 'none';
        } else {
            mood.style.display = 'block';
        }
    });
}

// const listScreen = document.querySelector(".listScreen");
///............................ checking listsscreen page ................

// let notesCache = [];
// let notesMap = new Map();

// (async () => {

//    const data1 = await axios.get("/getNotes", {
//       withCredentials: true
//    })
//    notesCache = data1.data;
//    notesMap.clear();
//    notesCache.forEach((note) => {
//       notesMap.set(note.id, note);
//    })
// })();

// let currentEditingId = null;

// if (notesCache.length > 0) {

//    notesCache.forEach(element => {
//       console.log(element)

//       title_list = document.createElement("div");
//       title_list.classList.add("title");
//       // title_list.setAttribute("id", element.id);
//       title_list.innerHTML = element.title;
//       title_list.dataset.id = element.id;

//       listScreen.querySelector("header").appendChild(title_list);
//    });

//    title_list.addEventListener('click', async function () {
//       const noteId = Number(this.dataset.id);
//       const notes = notesMap.get(noteId);
//       if (!notes) return;
//       document.querySelector(".editorTitle").value = notes.title;
//       document.querySelector(".editorText").innerHTML = notes.text;
//       openEditor1();
//    })

// }

////  * "Imediately invoked on openeing notepad ..... (IIFO) FUNCTION ..."

///                #work during posting  new notes

// newnotes.addEventListener("click", function openEditor() {

//    currentEditingId = null;

//    document.querySelector(".listScreen").style.display = "none";
//    document.querySelector(".editorScreen").style.display = "block";
//    if (document.querySelector(".editorTitle").value) {
//       document.querySelector(".editorTitle").value = ''
//    }
//    if (document.querySelector(".editorText").value) {
//       document.querySelector(".editorText").value = ''
//    }
//    async function handleAction() {

//       let title = document.querySelector(".editorTitle")
//       const text = document.querySelector(".editorText");

//       let titleValue = title.value || 'nan';
//       const textValue = text.value;

//       const network_status = navigator.onLine;

//       console.log(network_status)

//       let messsage = await add_data(titleValue, textValue);

//       console.log(messsage);

//       return messsage;
//    }

//    save.addEventListener("click", async () => {
//       let message = await handleAction();

//       alert(message)

//    });

//    backArrow.addEventListener("click", () => {
//       handleAction();
//    });
//    backArrow.addEventListener("click", goBack);

// });

// async function add_data(titleValue, textValue) {

//    if (currentEditingId) {

//    }

//    else {
//       const { data } = await axios.post("/add", {
//          title: titleValue,
//          text: textValue,

//       })

//       if (data.success) {
//          console.log(data.notes)

//          return data.message;

//       }
//    }

// }

let notesCache = [];
let notesMap = new Map();
const backArrow = document.querySelector('.backArrow');
const newnotes = document.querySelector('.newnotes');
const save = document.querySelector('.save');
let currentEditingId = null;

const editorTitle = document.querySelector('.editorTitle');
const editorText = document.querySelector('.editorText');
const listScreen = document.querySelector('.listScreen');
let originalTitle = '';
let originalText = '';

let app_state = {
    currentMode: 'create',
};

///  ......................map of appp ...........................
const notes_app = {
    save_note: async (title, text) => {
        const { data } = await axios.post('/notes/add', {
            title: title,
            text: text,
        });
        if (data.success) return data.notes[0];
    },
    edit_note: async (title, text, id) => {
        const { data } = await axios.put('/notes/edit', {
            id: id,
            title: title,
            text: text,
        });
        if (data.success) return data.notes[0];
    },

    fetch_note: async () => {
        const { data } = await axios.get('/notes/getNotes');

        if (data.success) {
            notesCache = data.notes;
            console.log(notesCache);
            notesMap.clear();
            notesCache.forEach((item) => {
                notesMap.set(`note-${item.id}`, item);
                console.log(notesMap.get(`note-${item.id}`));

                putNote(item.title, item.id);
            });
        }
    },
};
// .........................................................................

function putNote(title, id) {
    let title_list = document.createElement('div');
    title_list.classList.add('title');
    title_list.innerHTML = title;
    title_list.id = `note-${id}`;

    listScreen.querySelector('header').appendChild(title_list);

    title_list.addEventListener('click', () => {
        currentEditingId = Number(title_list.id.slice(5));

        let content = notesMap.get(title_list.id);
        editorTitle.value = content.title;
        editorText.value = content.text;

        originalTitle = content.title;
        originalText = content.text;

        app_state.currentMode = 'edit';
        save.disabled = true;

        openEditor();
    });
}

// ....................  starting the appp ...........
((init) => {
    notes_app.fetch_note();
})();

// ......................................................

backArrow.addEventListener('click', () => {
    goBack();
});

newnotes.addEventListener('click', () => {
    editorTitle.value = '';
    editorText.value = '';
    app_state.currentMode = 'create';
    currentEditingId = null;
    openEditor();
    save.disabled = true;
    originalTitle = '';
    originalText = '';
});
function checkChanges() {
    console.log('hello', originalTitle);
    const changed =
        editorTitle.value.trim() !== originalTitle || editorText.value.trim() !== originalText;

    save.disabled = !changed;
}

editorText.addEventListener('input', checkChanges);
editorTitle.addEventListener('input', checkChanges);
save.addEventListener('click', async () => {
    const title = editorTitle.value.trim();
    const text = editorText.value.trim();
    if (!title || !text) {
        alert('Please enter title and text');
        return;
    }

    if (app_state.currentMode == 'create') {
        const result = await notes_app.save_note(title, text);
        if (result) {
            notesMap.set(`note-${result.id}`, result);

            putNote(result.title, result.id);
            alert('saved successfully ..🐘');
            currentEditingId = result.id;
            app_state.currentMode = 'edit';
            console.log(result.id);
            save.disabled = true;
            originalTitle = title;
            originalText = text;
        } else {
            alert('some error occured..');
        }
    } else {
        const result = await notes_app.edit_note(title, text, currentEditingId);

        if (result) {
            alert('edited successfully ..🐘');
            save.disabled = true;

            notesMap.set(`note-${currentEditingId}`, result);

            document.querySelector(`#note-${currentEditingId}`).textContent = result.title;

            originalTitle = result.title;
            originalText = result.text;
        }
    }
});

function openEditor() {
    document.querySelector('.listScreen').style.display = 'none';
    document.querySelector('.editorScreen').style.display = 'block';
}

function goBack() {
    document.querySelector('.listScreen').style.display = 'block';
    document.querySelector('.editorScreen').style.display = 'none';
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
