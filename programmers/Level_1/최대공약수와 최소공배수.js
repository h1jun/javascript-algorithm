function gcd(a, b) {
    while(b > 0) {
        let temp = a;
        a = b
        b = temp % b;
    }
    return a
}

function lcm(a, b) {
    return a * b / gcd(a, b)
}

function solution(n, m) {
    let answer = [];

    answer.push(gcd(n, m));
    answer.push(lcm(n, m));

    return answer;
}

// 리팩토링
function solution(n, m) {
    const gcd = (a, b) => a % b === 0 ? b : gcd(b, a % b);
    const lcm = (a, b) => a * b / gcd(a, b);
    return [gcd(n, m), lcm(n, m)];
}