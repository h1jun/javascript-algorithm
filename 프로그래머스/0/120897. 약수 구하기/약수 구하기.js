function solution(n) {
    const res = [];
    for(let i = 0; i <= n; i++) {
        if(n % i === 0) res.push(i)
    }
    return res;
}