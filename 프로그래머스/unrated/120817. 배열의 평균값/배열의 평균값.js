function solution(numbers) {
    const sum = numbers.reduce((a, c) => a + c);
    return parseFloat(sum / numbers.length);
}