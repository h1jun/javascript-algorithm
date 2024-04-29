function solution(arr, queries) {
    queries.forEach(el => {
        const [s, e, k] = el;
        for(let i = s; i <= e; i++) {
            if(i % k === 0) arr[i] += 1;
        }
    })
    return arr;
}