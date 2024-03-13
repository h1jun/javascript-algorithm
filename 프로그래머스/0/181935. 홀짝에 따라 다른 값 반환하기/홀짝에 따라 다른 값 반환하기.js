function solution(n) {
    let res = 0; 
    for(let i = 1; i <= n; i++) {
        if (n % 2 !== 0) {
            if(i > n) continue;
            else if(i % 2 !== 0) res += i;
        }
        
        if(n % 2 === 0 ) {
            if (i > n) continue;
            else if(i % 2 === 0) res += i*i;
        }
        
    }
    return res;
}