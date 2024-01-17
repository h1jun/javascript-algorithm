function solution(rsp) {
    const obj = {
        2: '0',
        0: '5',
        5: '2'
    }

    let res = '';
    for(const el of rsp) {
        res += obj[el]
    }
    return res;
}