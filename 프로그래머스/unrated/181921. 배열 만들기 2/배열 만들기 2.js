function solution(l, r) {
    const res = [];
    for(let i = l; i <= r; i++) {
        if(![...String(i)].every(num => num === '5' || num === '0')) continue;
        res.push(i);
    }
    return res.length ? res : [-1];
}