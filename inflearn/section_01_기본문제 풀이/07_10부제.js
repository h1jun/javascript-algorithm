// 나의 풀이
function solution(day, arr) {
    let answer = 0;
    for (let i of arr) {
        i = String(i);
        if (i[i.length - 1] === String(day)) {
            answer++;
        }
    }
    return answer;
}

arr = [12, 20, 54, 30, 87, 91, 30];
console.log(solution(0, arr));





// 강사님 풀이
function solution(day, arr) {
    let answer = 0;
    for (let x of arr) {
        if (x % 10 == day) answer++;
    }

    return answer;
}

arr = [25, 23, 11, 47, 53, 17, 33];
console.log(solution(3, arr));