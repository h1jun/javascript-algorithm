function solution(my_string, s, e) {
    const res = my_string.split('');
    const first = res.slice(0, s).join('');
    const middle = res.slice(s, e+1).reverse().join('');
    const last = res.slice(e+1).join('');
    return first + middle + last;
}