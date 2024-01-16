function solution(num_str) {
    const answer = [...num_str].reduce((acc, cur) => +acc + +cur);
    return answer;
}