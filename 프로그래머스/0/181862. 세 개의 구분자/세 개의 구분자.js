function solution(myStr) {
    const arr = [...myStr];
    for(let i = 0; i < myStr.length; i++) {
        if(arr[i].includes('a')) arr[i] = '*';
        if(arr[i].includes('b')) arr[i] = '*';
        if(arr[i].includes('c')) arr[i] = '*';
    }
    const tempArr  = arr.join('').split('*');
    const res = [];
    for(let str of tempArr) {
       
        if(str !== '') res.push(str);
    }
    if(!res.length) res.push('EMPTY')
    return res;
}