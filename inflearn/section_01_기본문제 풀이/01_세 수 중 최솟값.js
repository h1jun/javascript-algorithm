// 나의 풀이
function solution(a, b, c){
    let answer;
    if (a > b) {
        if (b > c) {
            return c
        } else {
            return b
        } 
    } else {
        if (a < c) {
            return a
        } else {
            return c
        }
    }
}
console.log(solution(6, 5, 11));





// 강사님 풀이
function solution(a, b, c){
    let answer;
    if (a < b) answer = a;
    else answer = b
    if (c < answer) answer = c
    
    return answer
}
console.log(solution(6, 5, 11));