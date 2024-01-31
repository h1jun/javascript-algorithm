function solution(age) {
    const abc = 'abcdefghijklnmopqrstuvwxyz';
    let res = '';
    const strAge = String(age);
    for(let i = 0; i < strAge.length; i++) {
        res += abc[strAge[i]]
    }
    return res
}