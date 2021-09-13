// 나의 풀이
function solution(n) {
    let answer = 0;
    const arr = []
    for (let i = 1; i < n + 1; i++) {
        arr.push(i)
    }
    answer = arr.reduce((a, b) => (a + b))
    return answer;
}
console.log(solution(10));





// 강사님 풀이
function solution(n) {
    let answer = 0;
    for (let i = 1; i <= n; i++) {
        answer = answer + i;
    }

    return answer;
}

console.log(solution(10));