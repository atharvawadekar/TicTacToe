console.log("Welcome to TicTacToe");

let music = new Audio('music.mp3');
let audioTurn = new Audio('ting.mp3');
let gameover = new Audio('gameover.mp3');

let count = 0;
let game_flag = false;

let turn = "X";

//FUNCTION TO CHANGE TURN
function changeTurn(){
    if(turn == "X"){
        return "O";
    }
    else{
        return "X";
    }
}
function change_player(){
    let element = document.querySelector('.info')
    element.innerText = "Turn for "+turn;
    count++;
}

//FUNCTION TO CHECK FOR A WIN

function checkWin(){
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    let boxtext = Array.from(document.getElementsByClassName('boxText'));
    console.log(boxtext[wins[0][0]].innerText);
    for (let i = 0; i < wins.length; i++) {
        if((boxtext[wins[i][0]].innerText  == boxtext[wins[i][1]].innerText) && (boxtext[wins[i][0]].innerText  == boxtext[wins[i][2]].innerText) && (boxtext[wins[i][0]].innerText != "")){
            game_flag = true;

            let element = document.querySelector('.info');
            element.innerText = turn +" Won!";
            gameover.play();
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "100px";
        }
    }
}

//GAME LOGIC



let box = Array.from(document.getElementsByClassName('box'));



for (let i = 0; i < box.length; i++) {
    box[i].addEventListener('click', function myfn() {
        let boxtext = box[i].querySelector('.boxText');
        if(boxtext.innerText == "" && !game_flag && count<9){
            boxtext.innerText = turn;
            audioTurn.play();
            checkWin();
            if(!game_flag){
                turn = changeTurn();
                change_player();
            }
            if(count == 9){
                alert("Game Draw!!");
            }
        }
        else{
            alert("Invalid Move!");
        }
    });
}

