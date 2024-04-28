function solution(board) {
    const res = board.map(el => [...el]);
    const len = board.length;
    
    board.forEach((one, indexOne) => { 
        one.forEach((two, indexTwo) => {
            if(two === 1) {
                if(indexOne-1 >= 0)  res[indexOne-1][indexTwo] = 1; // 상
                if(indexTwo-1 >= 0)  res[indexOne][indexTwo-1] = 1; // 좌
                if(indexTwo+1 <= len -1)  res[indexOne][indexTwo+1] = 1; // 우
                if(indexOne+1 <= len -1)  res[indexOne+1][indexTwo] = 1; // 하
                if(indexOne-1 >= 0 && indexTwo-1 >= 0)  res[indexOne-1][indexTwo-1] = 1; // 10시
                if(indexOne-1 >= 0 && indexTwo+1 <= len -1)  res[indexOne-1][indexTwo+1] = 1; // 2시
                if(indexOne+1 <= len -1 && indexTwo+1 <= len -1) res[indexOne+1][indexTwo+1] = 1; // 5시
                if(indexOne+1 <= len -1 && indexTwo-1 >= 0)  res[indexOne+1][indexTwo-1] = 1; // 7시             
            }
        })
    })
    let ans = 0;
    res.forEach(elOne => {
        elOne.forEach(elTWo => {
            if(elTWo === 0) ans++;
        })
    })
    return ans;
}