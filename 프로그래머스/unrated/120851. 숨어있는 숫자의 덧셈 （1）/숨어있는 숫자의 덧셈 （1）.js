function solution(my_string) {
    let res = 0;
    [...my_string].forEach(el => {
        if(+el <= 9) res += +el
    })
    return res;
}