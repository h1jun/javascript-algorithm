// 나의 풀이
function solution(arr) {
    let answer = [];
    let temp = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            temp.push(arr[i]);
        }
    }
    answer.push(temp.reduce((a, b) => a + b));
    answer.push(Math.min(...temp));

    return answer;
}

arr = [12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));





// 강사님 풀이
function solution(arr) {
    let answer = [];
    let sum = 0, min = 1000;
    for (let x of arr) {
        if (x % 2 === 1) {
            sum += x;
            if (x < min) min = x;
        }
    }
    answer.push(sum);
    answer.push(min);
    return answer;
}

arr = [12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));
