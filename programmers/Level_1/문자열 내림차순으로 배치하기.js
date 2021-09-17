function solution(s) {
    let ans = "";
    s.split('').map(el => el.charCodeAt(0)).sort((a, b) => b - a).map(el => { ans += String.fromCharCode(el) });
    return ans
}

// 다른 풀이

function solution(s) {
    return s
        .split("")
        .sort()
        .reverse()
        .join("");
}
