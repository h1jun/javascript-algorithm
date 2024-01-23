function solution(my_string) {
    const num = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
    const arr = [...my_string].filter(str => num.includes(str))
    const res = arr.map(el => Number(el))
    return res.sort((a, b) => a - b);
}