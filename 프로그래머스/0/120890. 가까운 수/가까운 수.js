function solution(array, n) {
    const sortedArr = array.sort((a, b) => a - b)
    
    for(let i = 0; i < sortedArr.length; i++) {
        if(sortedArr[i] === n) return sortedArr[i];
        else if (sortedArr[i] > n) {
            if(sortedArr[i] - n >= n - sortedArr[i-1]) return sortedArr[i-1];
            else return sortedArr[i];
        }
    }
    return sortedArr.at(-1)
}