function solution(n) {
    const arr = [0];
    for(let i = 1; i <= 200; i++) {
        if(i % 3 !== 0 && !(String(i).split('').includes('3'))) arr.push(i)
    }
    console.log(arr)
    return arr[n]
}