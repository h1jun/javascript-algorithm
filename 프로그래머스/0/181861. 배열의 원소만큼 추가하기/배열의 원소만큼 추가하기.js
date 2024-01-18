function solution(arr) {
    const res = [];
    for(const i of arr) {
        for(let j = 0; j < i; j++) {
            res.push(i)
        }
    }
    return res;
}