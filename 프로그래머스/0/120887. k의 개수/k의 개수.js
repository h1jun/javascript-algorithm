function solution(i, j, k) {
    let res = 0;
    const arr = [];
    for(let num = i; num <=j; num++) {
        arr.push(num);
    }
    arr.forEach(el => {
        String(el).split('').forEach(el => {
            if(+el === k) res++;
        }) 
    })
    return res;
}