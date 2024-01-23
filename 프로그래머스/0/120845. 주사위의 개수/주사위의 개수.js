function solution(box, n) {
    const arr = box.map(el => Math.floor(el/n));
    return arr.reduce((acc, cur) => acc * cur);
}