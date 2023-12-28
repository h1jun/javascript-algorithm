function solution(A, B) {
    if(A === B) return 0;
    
    for(let i = 1; i <= A.length; i++) {
        const pushedWord = A.substring(A.length - i) + A.substring(0, A.length - i);
        if(pushedWord === B) return i
    }
 
    return -1;
}