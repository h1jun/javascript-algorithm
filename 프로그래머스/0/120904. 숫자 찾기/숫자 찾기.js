function solution(num, k) {
    const res = String(num).indexOf(k);
    return res >= 0 ? res + 1 : -1;
}