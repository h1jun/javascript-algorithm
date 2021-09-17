function solution(n) {
    let ans = ""
    
    if(n % 2 === 0) {
        ans += "수박".repeat(n / 2)
    } else {
        ans += "수박".repeat(parseInt(n / 2)) + '수'
    }

    return ans;
}