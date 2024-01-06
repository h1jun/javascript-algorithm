function solution(n) {
    let count = 0;
    
    while(true) {
        if(n % 2 === 0) {
            n /= 2
        } else {
            count++;
            n -= 1
        }
        if(n <= 0) break;
    }
    return count;
}