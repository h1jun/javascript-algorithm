function solution(numLog) {
    let res = '';
    const getChar = (num) => {
        if(num === 1) return 'w';
        if(num === -1) return 's';
        if(num === 10) return 'd';
        if(num === -10) return 'a';
    }
    for(let i = 1; i < numLog.length; i++) {
        res += getChar(+numLog[i] - +numLog[i-1]);
    }
    return res;
}