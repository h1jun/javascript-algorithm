function solution(keyinput, board) {
    const maxBoard = [Math.floor(board[0]/2), Math.floor(board[1]/2)]
    const res = [0, 0];
    
    for(let i = 0; i < keyinput.length; i++) {
        switch(keyinput[i]) {
            case 'left':
                if(res[0] - 1 >= -maxBoard[0]) res[0] -= 1;
                break;
            case 'right':
                if(res[0] + 1 <= maxBoard[0]) res[0] += 1;
                break;
            case 'up':
                if(res[1] + 1 <= maxBoard[1]) res[1] += 1;
                break;
            case 'down':
                if(res[1] - 1 >= -maxBoard[1]) res[1] -= 1;
                break;
        }
    }
    return res;

    
}