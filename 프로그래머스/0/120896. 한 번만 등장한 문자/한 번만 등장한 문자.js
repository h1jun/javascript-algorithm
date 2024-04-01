function solution(s) {
    let str = '';
    let res = [...s];
    
    [...s].forEach((el, idx) => {
        res[idx] = ''
        if(res.join('').indexOf(el) ===  -1) str += el;
        res = [...s]
    })
    
    return [...str].sort().join('')
}