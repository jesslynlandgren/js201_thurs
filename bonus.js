//Interactive Tic-Tac-Toe

//Instantiate blank board
function start() {
    var blank = [
        ['go!', '_1_', '_2_', '_3_'],
        ['_1_', '___', '___', '___'],
        ['_2_', '___', '___', '___'],
        ['_3_', '___', '___', '___']
    ];
    return blank;
}

//Prompt user for row and column where they want to move
function userMove(board) {
    var row = Math.floor((Math.random() * 3) + 1);
    var col = Math.floor((Math.random() * 3) + 1);
    return board.map(row, col, 'O');
}

function computerMove(board){
    var row = Math.floor((Math.random() * 3) + 1);
    var col = Math.floor((Math.random() * 3) + 1);
    var letter = Math.floor((Math.random() *2) + 1);
    return board.map(changeBoard(row, col, 'X'));


    board.map(function(rowArr, rowIdx) {
        return rowArr.map(function(val, colIdx) {

        });
    });
}

function changeBoard(row, col, team){

}


function displayBoard() {

}

function existsWinner() {

}

function winnerMessage() {
    console.log('')
}

function game() {
    board = start();
    while (checkWinner(board)[0] === False) {
        displayBoard(board);
        userMove();
        displayBoard(board);
        computerMove();
        displayBoard(board);
    }
    winnerMessage(checkWinner(board)[1]);
}
