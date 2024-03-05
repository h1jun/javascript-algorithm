function solution(my_string, m, c) {
    let res = '';
    for(let i = 0; i < my_string.length; i+=m) {
        res += my_string.slice(i, i+m)[c-1]
    }
    return res;
}