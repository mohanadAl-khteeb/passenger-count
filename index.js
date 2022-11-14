let countEl = document.getElementById('count-el');
let saveBtn = document.getElementById('save-btn');
let saveEl = document.getElementById('save-el');
let count = 0;

function increment(){
    count++;
    countEl.textContent = count;
}
function save(){
    let countStr = " " + count + " - ";
    saveEl.textContent += countStr;
    count = 0;
    countEl.textContent = 0;
}

