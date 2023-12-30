function solution(s) {
    const numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    numbers.forEach((num, idx) => s = s.replaceAll(num, idx))
    return +s;
}
