function solution(myString) {
    const arr = myString.split('');
    const str = myString.split('x');
    const resArr = [];
    for(const el of str) {
        resArr.push(el)
    }
    return resArr.sort().filter(el => el !== '')
}