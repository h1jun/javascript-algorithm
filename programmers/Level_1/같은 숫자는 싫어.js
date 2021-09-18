function solution(arr) {
    let answer = [];
    let first = arr[0];
    answer.push(first);
    
    for(let i = 1; i < arr.length; i++) {
        if (first === arr[i]) {
            continue;
        } else {
            answer.push(arr[i])
        }
        first = arr[i]
    }

    
    return answer;
}