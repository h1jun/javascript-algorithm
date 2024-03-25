function solution(n) {
    let sum = 1;
    let num = 0;
    
    while(true) {
        num += 1;
        sum *= num;
        if(sum === n) break;
        
        if (sum > n) {
            num -= 1;
            break;  
        } 
    }
    return num;
}