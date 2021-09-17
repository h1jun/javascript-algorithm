function solution(n) {
    let answer;

    if (Number.isInteger(n ** 0.5)) {
        answer = ((n ** 0.5) + 1) ** 2
    } else {
        answer = -1
    }

    return answer;
}

// 다른 풀이
function solution(n) {
    let answer;
    if (n % Math.sqrt(n) === 0) {
        answer = Math.pow(Math.sqrt(n) + 1, 2)
    } else {
        answer = -1
    }

    return answer;
}