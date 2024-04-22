function solution(s) {
    let sum = 0;
    const arr = s.split(' ');
    
    arr.forEach((el, idx) => {
        if(el === 'Z')sum -= arr[idx-1];
        else sum += +el
    })
    return sum;
}