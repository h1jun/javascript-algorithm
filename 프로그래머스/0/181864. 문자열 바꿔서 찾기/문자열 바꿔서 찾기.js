function solution(myString, pat) {
    let res = '';
    for(const str of myString) {
        if(str === 'A') res += 'B'
        else res += 'A'
    }
    return +res.includes(pat);
}