function solution(a, b) {
    const forward = +(String(a) + String(b));
    const reverse = +(String(b) + String(a));
    
    return forward > reverse ? forward : reverse;
}