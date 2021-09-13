// 나의 풀이
function solution(arr) {
    let answer;
    let min = arr[0]
    for (let i = 1; i < arr.length; i++) {
        if (min > arr[i]) {
            min = arr[i]
        }
    }
    return min
}

let arr = [5, 7, 11, 3, 1, 9, 11];
console.log(solution(arr));





// 강사님 풀이
function solution(arr) {
    let answer, min = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) min = arr[i];
    }
    answer = min;
    return answer;

}

let arr = [5, 7, 1, 3, 2, 9, 11];
console.log(solution(arr));