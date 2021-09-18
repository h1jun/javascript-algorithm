function solution(arr, divisor) {
    let ans = [];
    arr.forEach(num => {
        if(num % divisor === 0) {
            ans.push(num)
        }
    })
    
    ans.length === 0 ? ans.push(-1) : ans.sort((a, b) => a - b)
    
    return ans;
}