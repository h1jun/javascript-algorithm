function solution(arr, queries) {
    queries.forEach(el => {
        const temp = arr[el[0]];
        arr[el[0]] = arr[el[1]];
        arr[el[1]] = temp;
    })
    return arr;
}