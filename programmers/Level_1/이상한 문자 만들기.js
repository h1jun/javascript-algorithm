function solution(s) {
    let answer = '';

    s.split(' ').forEach((el) => {
        el.split('').forEach((word, i) => {
            if (i % 2 === 0) {
                answer += word.toUpperCase();
            } else {
                answer += word.toLowerCase();
            }
        })
        answer += " "
    })
    return answer.slice(0, -1);
}