function solution(a, b) {
    let answer = '';
    let count = -1
    let date = ['FRI','SAT', 'SUN','MON','TUE','WED','THU'];
    let month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    for(let i=0; i<a-1; i++) {
        count += month[i];
    }
    count += b;

    let result = count % 7;
    answer = date[result]

    return answer;
}