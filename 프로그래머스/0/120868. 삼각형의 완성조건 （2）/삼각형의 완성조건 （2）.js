function solution(sides) {
    let res = 0;
    const sortedSides = (sides.sort((a, b) => b - a));
    
    if(sortedSides[0] === 2) return 1;

    for(let i = sortedSides[1]-sortedSides[0]+1; i <= sortedSides[0]; i++) {
        if(sortedSides[1] + i > sortedSides[0]) res++;
    }
    const sum = sortedSides[0] + sortedSides[1];
    for(let i = sortedSides[0]+1; i < sum; i++) {
        if(sortedSides[1] + i > sortedSides[0]) res++;
    }
    return res;
}