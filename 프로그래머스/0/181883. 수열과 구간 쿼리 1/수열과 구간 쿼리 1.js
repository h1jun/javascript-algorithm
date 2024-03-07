function solution(arr, queries) {
    const res = [...arr];
    
    for(let i = 0; i < queries.length; i++) {
        const [s, e] = queries[i]
    
        if(s <= e) {
            for(let j = s; j <= e; j++) {
                res[j] += 1;
            }
        } 
    }
    return res;
}