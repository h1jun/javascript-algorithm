function solution(array) {
    let res = 0;
    array.forEach(el => {
        const splitedArr = String(el).split('');
        splitedArr.forEach(el => {
            if(el === '7') res++;
        })
    })
    return res;
}