// 나의 풀이
function solution(s) {
    let answer = 0;
    for (let i of s) {
        if (i.charCodeAt() >= 65 && i.charCodeAt() <= 90) {
            answer += 1;
        }
    }
    return answer;
}

let str = "KoreaTimeGood";
console.log(solution(str));





// 강사님 풀이
function solution(s) {
    let answer = 0;
    for (let x of s) {
        //let num=x.charCodeAt();
        //if(num>=65 && num<=90) answer++;
        if (x === x.toUpperCase()) answer++;
    }

    return answer;
}

let str = "KoreaTimeGood";
console.log(solution(str));