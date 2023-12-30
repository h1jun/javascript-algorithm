function solution(n) {
    let answer = 0;
    
    for(let i = 1; i < 3500; i++) {
        if(i * i === n) answer = 1;
    }
    return answer ? answer : 2
}