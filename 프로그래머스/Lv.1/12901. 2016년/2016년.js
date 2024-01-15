function solution(a, b) {
    let date = ['SUN','MON','TUE','WED','THU', 'FRI','SAT'];
    let month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    let day = b + 4;
    
    for(let i=0; i<a-1; i++) {
        day += month[i];
    }

    let result = day % 7;

    return date[result];
}