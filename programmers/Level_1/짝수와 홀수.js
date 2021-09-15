function solution(num) {
    if (num % 2 === 0) {
        return "Even"
    } else {
        return "Odd"
    }
}

// 다른 풀이
function solution(num) {
    return num % 2 ? "Odd" : "Even";
}