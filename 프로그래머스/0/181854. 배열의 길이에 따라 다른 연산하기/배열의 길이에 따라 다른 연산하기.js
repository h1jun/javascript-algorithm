function solution(arr, n) {
    const res = [];
    if(arr.length % 2 === 0) {
        arr.forEach((num, idx) => {
            if (idx % 2 === 0) res.push(num);
            else res.push(num + n);
        })
    } else {
        arr.forEach((num, idx) => {
            if (idx % 2 === 0) res.push(num + n);
            else res.push(num);
        })
    }
    return res;
}