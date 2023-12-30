function solution(my_string, n) {
    let answer = '';
    
    my_string.split('').forEach((str) => {
     for(let i = 0; i < n; i++)  answer += str;
    })
    
    return answer;
}