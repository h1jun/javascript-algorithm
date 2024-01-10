function solution(arr, query) {
    let res = [...arr];
    query.forEach((el, idx) => {
        if(idx % 2 === 0) {
            res = res.slice(0, el+1)
        } else {
            res = res.slice(el)
        }
    })

    return res;
}