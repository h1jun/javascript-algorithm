function solution(s, n) {
    let ans = '';

    s.split('').forEach(el => {
        if (el === " ") {
            ans += el
        } else {
            ans += String.fromCharCode(el.charCodeAt(0) > 90 ? (el.charCodeAt(0) + n - 97) % 26 + 97 : (el.charCodeAt(0) + n - 65) % 26 + 65);
        }
    });
    return ans;
}
