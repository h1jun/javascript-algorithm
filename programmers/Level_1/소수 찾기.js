function prime() {
    let n = 1000000;
    let arr = Array(n + 1).fill(true).fill(false, 0, 2);

    for (let i = 2; i < Number(n ** 0.5) + 1; i++) {
        if (arr[i]) {
            for (let j = i * i; j <= n; j += i) {
                arr[j] = false;
            }
        }
    }
    return arr;
}

    

function solution(n) {
    let ans = 0;
    let arr = prime();
    
    for(let i = 1; i <= n; i ++ ) {
        if (arr[i] === true) {
            ans += 1
        }
    }
    return ans;
}