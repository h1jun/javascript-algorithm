function solution(picture, k) {
    const res = [];
    
    picture.forEach(arr => {
        let copy = '';
        arr.split('').forEach(item => {
            copy += item.repeat(k);
        })
        for(let i = 0; i < k; i++) {
            res.push(copy);
        }    
    })
    return res;
}