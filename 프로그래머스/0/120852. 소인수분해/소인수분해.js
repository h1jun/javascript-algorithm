function solution(n) {
    const arr = new Set();
    for(let i = 2; i <= n; i++) {
        while(n % i === 0) {
            arr.add(i)
            n /= i;
        }
    }
    return [...arr];
}