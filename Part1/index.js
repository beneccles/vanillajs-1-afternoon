let board = [];
let moveCount = 0;

function clearBoard(){
    let currentId = 0;
    board.splice(0, 9);

    // for (let i = 0; i < 9; i++){
    //     currentId = document.getElementById(`${i}`);
    //     currentId[i].innerText = "-";
    // }

    // console.log(board);
}

function winCheck(id){
    if (board[0] !== undefined && board[0] === board[3] && board[0] === board[6]){
        alert(`${board[id]} wins!`)
        clearBoard();
    }
    else if (board[0] !== undefined && board[0] === board[1] && board[0] === board[2]){
        alert(`${board[id]} wins!`)
        clearBoard();
    }
    else if (board[3] !== undefined && board[3] === board[4] && board[3] === board[5]){
        alert(`${board[id]} wins!`)
        clearBoard();
    }
    else if (board[6] !== undefined && board[6] === board[7] && board[6] === board[8]){
        alert(`${board[id]} wins!`)
        clearBoard();
    }
    else if (board[1] !== undefined && board[1] === board[4] && board[1] === board[7]){
        alert(`${board[id]} wins!`)
        clearBoard();
    }
    else if (board[2] !== undefined && board[2] === board[5] && board[2] === board[8]){
        alert(`${board[id]} wins!`)
        clearBoard();
    }
    else if (board[0] !== undefined && board[0] === board[4] && board[0] === board[8]){
        alert(`${board[id]} wins!`)
        clearBoard();
    }
    else if (board[2] !== undefined && board[2] === board[4] && board[2] === board[6]){
        alert(`${board[id]} wins!`)
        clearBoard();
    }
}

function play(id){
    const playerSpan = document.getElementById('player') //Grab the player ID from index.html
    const currentId = document.getElementById(`${id}`)

    if (playerSpan.innerText === 'X') { //Check to see who's turn is next.
        playerSpan.innerText = 'O';
        currentId.innerText = 'X';
        board[id] = 'X';
        moveCount++;
    }
    else{
        playerSpan.innerText = 'X';
        currentId.innerText = 'O';
        board[id] = 'O';
        moveCount++;
    }

    winCheck(id);
   // 9 total possible moves
   // Check for win at 4, 5, 7, and 9
   if (moveCount === 9){
       alert("CAT'S Game");
       board = [];
   }
   
}