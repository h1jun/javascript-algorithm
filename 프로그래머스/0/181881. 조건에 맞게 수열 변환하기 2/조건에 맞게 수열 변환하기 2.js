function solution(arr) {
    let count = 0;
    let res = [...arr]
    const equals = (a, b) => JSON.stringify(a) === JSON.stringify(b);
 
    while(true) {
        const temp = res.map(el => {
            if(el > 50 && el % 2 === 0) return el/2;
            if(el < 50 && el % 2 !== 0) return el*2 + 1;
            else return el;
        })
        
        if(!equals(res,temp)){
            res = temp
            count++;
        } else {
            break;
        }
     
     
        
    }
    return count;
}