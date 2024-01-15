function solution(n, control) { 
    const char = {
        w: 1,
        s: -1,
        d: 10,
        a: -10
    }
    
    for(const c of control) {
        n += char[c];
    }

    return n;
}