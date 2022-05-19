function solution(s) {
  let answer;

  const set = new Set(s);
  answer = Array.from(set);

  return answer;
}
let str = ["good", "time", "good", "time", "student"];
console.log(solution(str));

// 강사님 풀이
function solution(s) {
  let answer;
  //console.log(s.indexOf("time")); // 첫 번째로 발견되는 index 값을 출력
  answer = s.filter((item, idx) => s.indexOf(item) === idx);
  return answer;
}
let str2 = ["good", "time", "good", "time", "student"];
console.log(solution(str2));
