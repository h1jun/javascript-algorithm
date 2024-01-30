function solution(my_string) {
    let res = '';
    return [...my_string].reverse().map(str => res = str + res).sort();
}