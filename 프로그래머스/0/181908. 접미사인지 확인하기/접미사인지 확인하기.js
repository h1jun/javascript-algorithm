function solution(my_string, is_suffix) {
    const reversedArr = [...my_string].reverse();
    const arr = [reversedArr[0]];

    for(let i = 0; i < my_string.length; i++) {
        arr.push(my_string.slice(i));
    } 

    return arr.includes(is_suffix) ? 1 : 0;
}