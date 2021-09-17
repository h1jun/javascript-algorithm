function solution(n) {
    let answer = []
    let temp = String(n).split('').reverse()
 
    for (let i = 0; i < temp.length; i++) {
        answer.push(parseInt(temp[i]))
    }
 
    return answer;
}

// 다른 풀이
function solution(n) {
    return String(n).split('').reverse().map(num => num = parseInt(num));
}