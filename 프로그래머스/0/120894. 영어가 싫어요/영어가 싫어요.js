function solution(numbers) {
    const numObj = {
        "zero": '0',
        "one": '1',
        "two": '2',
        "three": '3',
        "four": '4',
        "five": '5',
        "six": '6',
        "seven": '7',
        "eight": '8',
        "nine": '9' 
    }
    let res = ''
    let temp = '';
    numbers.split('').forEach(el => {
        temp += el;
        if(numObj[temp]) {
            res += numObj[temp];
            temp = '';
        }
    })
    return +res;
}