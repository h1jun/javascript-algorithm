function solution(brown, yellow) {
    const total = brown + yellow;
    const arr = [];
    
    for(let i = 1; i <= total; i++) {
        if(total % i === 0) arr.push([i, total / i])
    }
    
    for(item of arr) {
        if((item[0] > item[1] || item[0] === item[1]) && (item[0]-2) * (item[1]-2) === yellow) {
            return item;
        }
    }
}