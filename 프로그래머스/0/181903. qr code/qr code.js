function solution(q, r, code) {
    let res = '';
    [...code].forEach((el, idx) => {
        if(idx % q === r) res += el;
    })
    return res;
}