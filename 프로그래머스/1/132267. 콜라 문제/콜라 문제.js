function solution(a, b, n) {
    let coke = 0;
    let res = n;
    
    while(true) {
        coke += Math.floor(res / a) * b
        res = (Math.floor(res / a) * b) + (res % a);

        if(res < a) break;
    }

    return coke ;
}