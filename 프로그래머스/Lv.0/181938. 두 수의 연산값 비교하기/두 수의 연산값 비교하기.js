function solution(a, b) {
    const sum = String(a) + String(b);
    const multi = 2 * a * b;
    
    if(+sum === multi) return +sum;
    if(+sum > multi) return +sum;
    else return multi;

}