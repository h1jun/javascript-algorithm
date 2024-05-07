function solution(strArr) {
    const obj = {};
    strArr.forEach(el => {
        if(obj[el.length]) obj[el.length] += 1;
        else obj[el.length] = 1;
    })

    let max = 0;
    for(let key in obj) {
        if(obj[key] > max) max = obj[key];
    }
    return max;
}