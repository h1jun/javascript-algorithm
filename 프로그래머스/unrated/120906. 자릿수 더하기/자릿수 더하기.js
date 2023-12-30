function solution(n) {
    let answer = 0;

    String(n).split('').forEach(el => {
        answer += +el
    })
    return answer;
}