function solution(a, b) {
  let answer = [];
  a.forEach((idx) => {
    if (a[idx] === b[idx]) {
      answer.push("D");
    } else if (
      (a[idx] === 1 && b[idx] === 3) ||
      (a[idx] === 2 && b[idx] === 1) ||
      (a[idx] === 3 && b[idx] === 2)
    ) {
      answer.push("A");
    } else {
      answer.push("B");
    }
  });

  return answer;
}

let a = [2, 3, 3, 1, 3];
let b = [1, 1, 2, 2, 3];
console.log(solution(a, b));
