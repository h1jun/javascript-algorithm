// 나의 풀이
function solution(n) {
    let answer;
    if (n % 12 === 0) {
        answer = n / 12
    } else {
        answer = Math.floor(n / 12) + 1
    }
    return answer;
}
//ceil을 사용해서 한번에 해결하자!
console.log(solution(25));




// 강사님 풀이
function solution(n) {
    let answer;
    answer = Math.ceil(n / 12);
    return answer;
}

console.log(solution(178));