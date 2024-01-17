function solution(hp) {
    let res = 0;
    res += Math.floor(hp/5)
    hp %= 5;
    
    res += Math.floor(hp/3)
    hp %= 3;
    
    res += Math.floor(hp/1)

    return res;
}