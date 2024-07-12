const dice = document.getElementById('numOfDice');
const roll = document.getElementById('roll');
const diceImages = document.getElementById('diceImages');
const diceResult = document.getElementById('diceResult');


roll.onclick = function(){
    let images = [];
    let result = [];
    for (let i = 0; i != Number(dice.value); i++){
        const random = Math.floor(Math.random() * 6) + 1;
        result.push(random);
        images.push(`<img src=diceImages/${random}.png>`);
    }
    diceResult.textContent = "Result: " + result.join(', ');
    diceImages.innerHTML = images.join('');
    delete images;
    delete result;
}