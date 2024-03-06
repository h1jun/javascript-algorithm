function getDivisors(n) {
    const divisors = [];
    for(let i = 1; i <= Math.sqrt(n); i++) {
        if(n % i === 0) {
            divisors.push(i);
            if(i !== n/i) {
                divisors.push(n/i);
            }
        }
    }
    return divisors.length;
}

function solution(n) {
    let res = 0;
    for(let i = 1; i <= n; i++) {
        if(getDivisors(i) >= 3) res++;
    }
    return res;
}