function solution(intStrs, k, s, l) {
    const res = [];
    intStrs.forEach(el => {
        if([...el].splice(s, l).join('') > k) {
            res.push(+[...el].splice(s, l).join(''));
        } 
    })
    return res;
}