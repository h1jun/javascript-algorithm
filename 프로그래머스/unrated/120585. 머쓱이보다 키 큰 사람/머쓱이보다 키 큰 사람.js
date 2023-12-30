function solution(array, height) {
    let arr = [...array, height];
    arr = arr.sort((a, b) => b - a);

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === height) return i;
    }
}