// 나의 풀이
function solution(str) {
    let answer = str;
    answer = answer.replace(/A/g, '#')
    return answer;
}

let str = "BANANA";
console.log(solution(str));






// 강사님 풀이
// #1
function solution(s) {
    let answer = "";
    for (let x of s) {
        if (x == 'A') answer += '#';
        else answer += x;
    }
    return answer;
}

let str = "BANANA";
console.log(solution(str));

// #2
function solution(s) {
    let answer = s;
    answer = answer.replace(/A/g, "#");
    return answer;
}

let str = "BANANA";
console.log(solution(str));