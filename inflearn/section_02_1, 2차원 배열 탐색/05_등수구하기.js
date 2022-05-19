function solution(arr) {
  const len = arr.length;
  let answer = Array.from({ length: len }, () => 1);

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (arr[j] < arr[i]) answer[j] += 1;
    }
  }
  return answer;
}

let arr = [87, 89, 92, 100, 76];
console.log(solution(arr));
