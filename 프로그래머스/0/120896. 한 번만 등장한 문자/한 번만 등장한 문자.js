function solution(s) {
    let res = [];
    for(let str of s) {
        if(s.indexOf(str) === s.lastIndexOf(str)) res.push(str)
    }
    return res.sort().join('');
}