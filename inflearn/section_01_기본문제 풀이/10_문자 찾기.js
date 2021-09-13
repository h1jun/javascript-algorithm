// 나의 풀이
function solution(s, t) {
    let answer = 0;
    for (let i of s) {
        if (i === t) {
            answer++;
        }
    }
    return answer;
}

let str = "COMPUTERPROGRAMMING";
console.log(solution(str, 'R'));





// 강사님 풀이

// #1
function solution(s, t) {
    let answer = 0;
    for (let x of s) {
        if (x === t) answer++;
    }
    return answer;
}

let str = "COMPUTERPROGRAMMING";
console.log(solution(str, 'R'));

// #2
function solution(s, t) {
    let answer = s.split(t).length;
    return answer - 1;
}

let str = "COMPUTERPROGRAMMING";
console.log(solution(str, 'R'));