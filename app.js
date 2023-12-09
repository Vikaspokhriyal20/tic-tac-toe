var boxes = document.querySelectorAll('.btn');
let resetBtn = document.getElementById('reset-btn');
let msgBox = document.querySelector('.msg-container');
let winningMsg = document.getElementById('msg');



let turnO = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [6, 7, 8],
    [3, 4, 5],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

resetGame = () => {
    turnO = true;
    msgBox.classList.add('hide');
    enabledBox();
}


boxes.forEach((box) => {
    box.addEventListener('click', () => {
        console.log('box was clicked');
        if (turnO) {
            box.innerHTML = 'o';
            box.classList.add('red');
            turnO = false;
        } else {
            box.innerHTML = 'x';
            box.classList.add('yellow')
            turnO = true;
        } 
        box.disabled = true;

        checkWinner();
    });
});

const disabledBox = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

const enabledBox = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = '';
    }
}


const showWinner = (winner) => {
    winningMsg.innerText = `Congratulations, Winner is ${winner}`;
    msgBox.classList.remove('hide');
    disabledBox();
}



const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val != '' && pos2Val != '' && pos3Val != '') {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log('Winner', pos1Val);
                showWinner(pos1Val);
            }
        }
    }
}

resetBtn.addEventListener('click', resetGame);
