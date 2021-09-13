// 나의 풀이
function solution(s) {
    let answer = "";
    for (let i of s) {
        if (i === i.toLowerCase()) {
            answer += i.toUpperCase();
        } else if (i === i.toUpperCase()) {
            answer += i.toLowerCase();
        }
    }

    return answer;
}

console.log(solution("StuDY"));





// 강사님 풀이
function solution(s) {
    let answer = "";
    for (let x of s) {
        if (x === x.toUpperCase()) answer += x.toLowerCase();
        else answer += x.toUpperCase();
    }
    return answer;
}

console.log(solution("StuDY"));