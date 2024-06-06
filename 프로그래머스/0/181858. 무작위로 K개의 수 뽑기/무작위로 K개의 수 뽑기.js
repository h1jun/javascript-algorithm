function solution(arr, k) {
    const res = [];
    for(let i = 0; i < arr.length; i++) {
        if(res.length >= k) continue;
        if(!res.find(el => el === arr[i])) {
            res.push(arr[i]);
        }
       
    }
   
    if(!res.length >= k) {
        return res;
    } else {
        const len = k - res.length;
        for(let i = 0; i < len; i++) {
            res.push(-1)
        }
    }
    return res;

}