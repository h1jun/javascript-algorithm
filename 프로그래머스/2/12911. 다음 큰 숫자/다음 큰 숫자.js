function solution(n) {
    const currentCount = [...n.toString(2)].filter(x => x === '1').length;
    
    let nextNumber = n;
    while(true) {
        nextNumber++;
        const nextCount =[...nextNumber.toString(2)].filter(x => x === '1').length;
        if(currentCount === nextCount) return nextNumber;
    }

}