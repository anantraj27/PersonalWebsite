let element = document.querySelector('h3');

let span = document.querySelector('span');

let span_text = '   { <  > } ;   ';

let text = 'A developer just exploring the development   :)               ';

let colors = ['red', 'green', 'blue'];

let isadding = true;
let addingfront = true;

let intervalid = '';

let i = 0;
let time = 120;
console.log(text.length);

if (isadding) {
    intervalid = setInterval(() => {
        if (isadding) {
            element.innerText = text.slice(0, i + 1);
            console.log(Math.floor(Math.random()) * colors.length);
            element.style.color = colors[Math.floor(Math.random() * colors.length)];

            i++;
            if (i === text.length) {
                // element.innerText= text.slice(i-7 );
                element.innerText = text.slice(0, text.length - 8);

                isadding = false;
                i = 0;
                clearInterval(intervalid);

                spanAnimation();
            }
        }
    }, 120);
}

function spanAnimation() {
    console.log('hello');

    // element.style.color = colors[Math.floor(Math.random() * colors.length)]

    setInterval(() => {
        if (addingfront) {
            //  element.style.color = colors[Math.floor(Math.random() * colors.length)]
            // element.style.color = colors[Math.floor(Math.random() * colors.length)]

            span.innerText = span_text.slice(0, i + 1);
            span.style.letterSpacing = '2px';
            i++;
        }
        if (i == span_text.length) {
            addingfront = false;
        }
        if (!addingfront) {
            element.style.color = colors[Math.floor(Math.random() * colors.length)];

            span.innerText = span_text.slice(0, i - 1);

            span.style.letterSpacing = '2px';
            i--;
        }
        if (i === 0) {
            addingfront = true;
        }
    }, 120);

    // i--;
}
