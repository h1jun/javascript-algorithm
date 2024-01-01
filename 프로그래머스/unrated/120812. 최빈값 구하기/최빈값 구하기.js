function solution(array) {
    if(array.length === 1) return array[0];
    
    const maxNumber = [...array].sort((a , b) => b - a)[0];
    const countArr = Array(maxNumber+1).fill(0);
    
    array.forEach(item => {
        countArr[item] += 1;
    })
    
    const reverseArr = [...countArr].sort((a , b) => b - a);
    if(reverseArr[0] === reverseArr[1]) return -1;
    
    return countArr.indexOf(Math.max(...countArr));
    
}