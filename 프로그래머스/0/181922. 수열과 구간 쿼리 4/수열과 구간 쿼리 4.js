function solution(arr, queries) {

    queries.forEach(el => {
        const tempArr = [];
        for(let i = el[0]; i <= el[1]; i++) {
            tempArr.push(i)
        }
        
        tempArr.forEach(el2 => {
            if(el2 % el[2] === 0) arr[el2] += 1;
        })
    })
    
    return arr;
}