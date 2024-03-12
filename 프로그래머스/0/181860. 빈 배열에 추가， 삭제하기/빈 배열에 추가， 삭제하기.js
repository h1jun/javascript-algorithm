function solution(arr, flag) {
    const res = [];
    flag.forEach((el, idx) => {
        if(el) for(let i = 0; i < arr[idx]*2; i++) res.push(arr[idx]);
        else for(let i = 0; i < arr[idx]; i++) res.pop();
    })
    return res;
   
}