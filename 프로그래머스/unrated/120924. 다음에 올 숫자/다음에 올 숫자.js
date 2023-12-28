function solution(common) {
    const last = common.length -1;
    const isAP = common[1] - common[0] === common[2] - common[1]
    
    if(isAP) return common[last] + (common[1] - common[0]);
    else return common[last] * (common[1] / common[0]); 
}