// 나의 풀이
function solution(a, b, c) {
    let answer = "YES";
    let arr = [a, b, c]
    arr.sort()
    if (arr[2] > arr[0] + arr[1]) {
        answer = "NO"
    }
    return answer;
}

console.log(solution(6, 7, 1));




// 강사님 풀이
function solution(a, b, c) {
    let answer = "YES", max;
    let sum = a + b + c;

    if (a > b) max = a;
    else max = b;
    if (c > max) max = c;

    if ((sum - max) <= max) answer = "NO"

    return answer;
}

console.log(solution(13, 33, 17));