function solution(numbers, direction) {
    // const len = numbers.length - 1;
    // if(direction === 'right') return [numbers[len], ...numbers.slice(0, len)];
    // else return [...numbers.slice(1, len+1), numbers[0]];
    
    const len = numbers.length - 1;
    if(direction === 'right')  numbers.unshift(numbers.pop());
    else numbers.push(numbers.shift());
    return numbers;
    
}