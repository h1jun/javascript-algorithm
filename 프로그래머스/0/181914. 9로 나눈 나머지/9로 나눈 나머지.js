function solution(number) {
    const arr = String(number).split('');
    const sum = arr.reduce((a, b) => +a + +b);
    return sum % 9
}