function solution(myString, pat) {
    const len = myString.length;
    let res = 0;
    
    for(let i = 0; i < len; i++) {
        if (i + pat.length > len) continue;
        if (myString.slice(i, i+pat.length) === pat) res++;
    }
    return res;
}