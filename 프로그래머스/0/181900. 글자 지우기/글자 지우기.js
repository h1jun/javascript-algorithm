function solution(my_string, indices) {
    const arr = indices.sort();
    let str = [...my_string];
    arr.forEach((el, idx) => str[el] = '');
    return str.join('')
}