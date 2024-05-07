function solution(arr) {
    const fiteredArr = [];
    
    arr.forEach((el, idx) => {
        if(el === 2) fiteredArr.push(idx); 
    })
    
    if(!fiteredArr.length) return [-1];
    else return arr.slice(fiteredArr[0], fiteredArr.at(-1)+1);
}