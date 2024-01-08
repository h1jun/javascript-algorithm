function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

function solution(arr) {
    let res = arr[0];
    for(let i = 1; i < arr.length; i++) {
        res = lcm(res, arr[i])
    }

    return res;
}