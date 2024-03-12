function solution(arr, queries) {
    queries.forEach(el => {
        [arr[el[0]],arr[el[1]]] = [arr[el[1]],arr[el[0]]]
    })
    return arr;
}