function solution(arr) {
  let answer = 0;
  const n = arr.length;

  const dx = [0, 0, 1, -1];
  const dy = [1, -1, 0, 0];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let flag = true;
      for (let k = 0; k < 4; k++) {
        let nx = i + dx[k];
        let ny = j + dy[k];
        if (
          nx >= 0 &&
          nx < n &&
          ny >= 0 &&
          ny < n &&
          arr[nx][ny] >= arr[i][j]
        ) {
          // arr[i][j]가 봉우리가 아닌 상황 => 끝까지 돌 필요가 없다.
          flag = false;
          break;
        }
      }
      if (flag) answer++;
    }
  }

  return answer;
}

let arr = [
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2],
];

console.log(solution(arr));
