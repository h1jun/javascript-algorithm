function solution(arr) {
  let answer = Number.MIN_SAFE_INTEGER;
  let sum1 = 0;
  let sum2 = 0;

  arr.forEach((num, i) => {
    sum1 = 0;
    sum2 = 0;
    arr.forEach((num, j) => {
      sum1 += arr[i][j]; // 행
      sum2 += arr[j][i]; // 열
    });
    answer = Math.max(answer, sum1, sum2);
  });

  sum1 = 0;
  sum2 = 0;
  arr.forEach((num, i) => {
    sum1 += arr[i][i];
    sum2 += arr[i][arr.length - i - 1];
  });
  answer = Math.max(answer, sum1, sum2);

  return answer;
}

let arr = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];
console.log(solution(arr));
