const factorial = (num) => {
    let sum = 1;
    for(let i = 1; i <= num; i++) {
        sum *= i;
    }
    return sum;
}
function solution(balls, share) {
    let res = Math.round(factorial(balls) / (factorial(balls-share) * factorial(share)));
    return res;
}