function solution(n) {
    if(n === 6) return 1;
    for(let i = 1; i <= 100; i++) {
        if((n * i) % 6 === 0) return (i * n) / 6;
    }
}