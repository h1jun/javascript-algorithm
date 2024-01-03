function solution(myString) {
    const answer = [...myString].map(item => item.toUpperCase()).join('');
    return answer;
}