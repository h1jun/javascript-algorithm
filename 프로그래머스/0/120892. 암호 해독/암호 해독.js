function solution(cipher, code) {
    return [...cipher].filter((el, idx) => (idx+1) % code === 0).join('');
}