function solution(strlist) {
    const answer = Array(strlist.length).fill(0);
    
    strlist.forEach((item, idx) => {
        answer[idx] += item.length;
    })
    
    return answer;
}