const playBtn = document.querySelector('.btn');
const slotsArr = document.querySelectorAll('.slots_item');
const messageEl = document.querySelector('.message');

playBtn.addEventListener('click', play);

const fruits = {
    firstArr: ['🍏', '🥥', '🍋', '🍇', '🍊', '🍒', '🫐', '🍑', '🍓', '🥝'],
    secondArr: ['🍋', '🍑', '🍓', '🥝', '🍒', '🍐', '🍊', '🥥', '🫐', '🍏'],
    thirdArr: ['🍇', '🍓', '🫐', '🍒', '🍊', '🍏', '🍑', '🥝', '🥥', '🍋']
}

function selectRandFruit (arr) {
    const fruitIndex = Math.floor(Math.random() * arr.length);

    return arr[fruitIndex];
}

function formResult () {
    let resultArr = [];

    for (let fruitArr in fruits) {
        resultArr.push(selectRandFruit(fruits[fruitArr]));
    }

    return resultArr;
}

function populateSlots(resultArr) {
    for (let s = 0; s < slotsArr.length; s++) {
        for (let r = 0; r < resultArr.length; r++) {
            if (s === r) {
                slotsArr[s].innerHTML = resultArr[r];
            }
        }
    }
}

function play() {
    const resultFruits = formResult();

    populateSlots(resultFruits);

    if (resultFruits[0] === resultFruits[1] && resultFruits[1] === resultFruits[2]) {
        messageEl.innerHTML = 'You won!!!';
        messageEl.style.color = 'darkgreen'; 
    } else {
        messageEl.innerHTML = 'You lost...';
        messageEl.style.color = 'darkred'; 
    }
    
    playBtn.innerHTML = 'Play again';
}