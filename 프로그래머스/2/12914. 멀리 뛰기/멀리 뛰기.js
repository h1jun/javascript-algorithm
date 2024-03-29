function solution(n) {
    const arr = [1, 2];
    
    if(n <= 2) return arr[n-1];
    
    for(let i = 2; i <= n; i++) {
        arr.push((arr[i-1] + arr[i-2]) % 1234567)
    }
    
    return arr[n-1];
}