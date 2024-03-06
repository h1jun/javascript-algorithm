function solution(str1, str2) {
    let res = '';
    Array.from(str1).forEach((str, idx) => res += str1[idx]+str2[idx]);
    return res;
}