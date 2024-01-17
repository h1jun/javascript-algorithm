function solution(my_string) {
    const lowerCase = 'abcdefghijklmnopqrstuvwxyz'
    let res = '';
    for(const str of my_string) {
        if(lowerCase.includes(str)) res += str.toUpperCase();
        else res += str.toLowerCase();
    }
    return res;
}