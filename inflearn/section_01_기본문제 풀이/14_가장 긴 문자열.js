// 나의 풀이
function solution(s) {
    let answer = "";
    let len = 0;
    for (let i of s) {
        if (i.length > len) {
            len = i.length
            answer = i
        }
    }
    return answer;
}
let str = ["teacher", "time", "student", "beautiful", "good"];
console.log(solution(str));





// 강사님 풀이
function solution(s) {
    let answer = "", max = Number.MIN_SAFE_INTEGER;
    for (let x of s) {
        if (x.length > max) {
            max = x.length;
            answer = x;
        }
    }
    return answer;
}
let str = ["teacher", "time", "student", "beautiful", "good"];
console.log(solution(str));