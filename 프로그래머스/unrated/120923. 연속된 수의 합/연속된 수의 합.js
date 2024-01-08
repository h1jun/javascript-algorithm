function solution(num, total) {
    const min = - num;
    const max = total + num;
    let arr = Array.from({ length: max * 2 }, (_, index) => index - max);

    for(let i = 0; i < arr.length; i++) {
        const sum = arr.slice(i, i+num).reduce((acc, cur) => acc + cur);
        if(sum === total) { 
            return arr.slice(i, i+num);
        }
    }
}