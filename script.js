// const img = document.querySelector('#wack1');


// img.addEventListener('click', function(e) {
//     const currentSrc = img.getAttribute('src');
//     const newSrc = currentSrc === 
//     './images/luigi-wack1.png' 
//     ? './images/luigi-wack2.png' 
//     : './images/luigi-wack1.png';
//     img.setAttribute('src', newSrc);
//     console.log('Hello world');
// })

let hits = 0;
let wack = 0;

function counter() {
    if (wack > 6) {
        customAlert('Ouch... That hurts!');
    }
    hits++;
    wack++;
    // console.log(hits);
    // console.log('Wack: ' + wack);
    document.querySelector('.hits').innerText = "Hits: " + hits;
}

// function resetCounter() {
//     hits = 0;
//     document.querySelector('.hits').innerText = "Hits: " + hits;
// }

function imgSize() {
    const img = document.querySelector('#monty');
    const rest = document.querySelector('#rest');
    let currentWidth = document.querySelector('#monty').width;
    // console.log(currentWidth);
    if (currentWidth >= 34) {
        if (currentWidth < 35) {
            rest.style.display = 'block';
            img.style.border = '2px solid red';
            img.style.cursor = 'pointer';
        }
        img.style.width = currentWidth-5 + 'px';
        img.style.height = 'auto';
    } 
}

function restSize() {
    const img = document.querySelector('#monty');
    const rest = document.querySelector('#rest');
    let currentWidth = document.querySelector('#monty').width;
    // console.log(currentWidth);
    if (currentWidth < 35) {
        wack = 0;
        // console.log('Wack: ' + wack)
        rest.style.display = 'none';
        img.style.border = 'none';
        img.style.width = 'auto';
        img.style.height = 'auto';
    } 
}


// Customer Alert Box
function customAlert(message) {
    const alertOverlay = document.createElement('div');
    alertOverlay.className = 'alert-overlay';

    const alertBox = document.createElement('div');
    alertBox.className = 'alert-box';
    alertBox.innerHTML = `<p>${message}</p><button onclick="closeAlert(this)">OK</button>`;

    alertOverlay.appendChild(alertBox);
    document.body.appendChild(alertOverlay);
}

function closeAlert(button) {
    const alertOverlay = button.closest('.alert-overlay');
    alertOverlay.remove();
    wack = 5;
}
