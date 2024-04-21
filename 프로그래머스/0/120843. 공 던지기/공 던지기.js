function solution(numbers, k) {
    let count = k - 1;
    let current = 1;
    const len = numbers.length;
    let res = 0;
    
    while(true) {
        if(len < current+2) current = (current+2) - len;
        else current += 2;
        
        count -= 1;
        if(count === 0) {
            res = numbers[current-1];
            break;
        }
    }
    return res;
}