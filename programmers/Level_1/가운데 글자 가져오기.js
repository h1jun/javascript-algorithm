function solution(s) {
    let answer = '';
    
    let len = s.length;
    if (len % 2 === 0) {
        answer += s.slice(len/2-1, len/2+1)
    } else {
         answer += s.slice(len/2, len/2+1)
    }
    
    return answer;
}