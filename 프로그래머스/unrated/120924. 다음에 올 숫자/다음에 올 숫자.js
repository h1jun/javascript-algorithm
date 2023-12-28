function solution(common) {
    const last = common.length -1;
    const gap = common[last] - common[last - 1];
    
    if(common[last - 1] - gap === common[last - 2]) {
        return common[last] + gap
    } else {
        return common[last] * (common[last] / common[last - 1])
    }
 
}