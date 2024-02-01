function solution(a, b, c) {
    const sum = a + b + c;
    const sumTwoSquared = sum * (a ** 2 + b ** 2 + c ** 2);
    const sumThreeSquared = sumTwoSquared * (a ** 3 + b ** 3 + c ** 3);
    if(a !== b && b !== c && c !== a) return sum;
    if(a === b && b === c && c === a) return sumThreeSquared;
    return sumTwoSquared;
}