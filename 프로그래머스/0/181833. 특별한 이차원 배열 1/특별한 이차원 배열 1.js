function solution(n) {  
    const arr = [];
    for(let i = 0; i < n; i++) {
        const emptyArr = Array.from({length: n}, (v, i) => 0);
        emptyArr[i] = 1
        arr.push(emptyArr)
    }
    return arr;
}