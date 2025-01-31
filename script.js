const fruits = {
    firstArr: ['🍏', '🥥', '🍋', '🍇', '🍊', '🍒', '🫐', '🍑', '🍓', '🥝'],
    secondArr: ['🍋', '🍑', '🍎', '🥝', '🍉', '🍐', '🍊', '🥭', '🫐', '🍏'],
    thirdArr: ['🍇', '🍓', '🫐', '🍌', '🍊', '🍏', '🍑', '🥝', '🥥', '🍍']
}

const selectRandFruit = arr => {
    const fruitIndex = Math.floor(Math.random() * arr.length);

    return arr[fruitIndex];
}

const formResult = () => {
    let resultArr = [];

    for (let fruitArr in fruits) {
        resultArr.push(selectRandFruit(fruits[fruitArr]));
    }

    return resultArr.join(' ');
}

console.log(formResult());

