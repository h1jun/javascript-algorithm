function solution(arr) {
    let minNum = Math.min.apply(null, arr);

    let answer = arr.filter((el) => el !== minNum);
    
    if (answer.length === 0) {
        answer.push(-1)
    }

    return answer;
}