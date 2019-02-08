var total = document.querySelector('#tally');
let add = document.querySelector('#add');
let minus = document.querySelector('#minus');
let inputVal = document.getElementById('input');
let newTotal = '';


add.addEventListener('click', incTotal);
minus.addEventListener('click', decTotal);

let beg = '';

function incTotal() {
    newTotal = (+beg + +inputVal.value);
    beg = newTotal;
    total.innerHTML = beg;
    return;
}

function decTotal() {
    newTotal = (+beg - +inputVal.value);
    beg = newTotal;
    total.innerHTML = beg;
    return;
}

