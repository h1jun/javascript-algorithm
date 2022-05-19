// 나의 풀이
function solution(s) {
  let answer = "";

  const arr = new Set(Array.from(s));

  for (let i of arr) {
    answer += i;
  }

  return answer;
}
console.log(solution("ksekkset"));

// 강사님 풀이
function solution(s) {
  let answer = "";
  //console.log(s.indexOf("K"));
  for (let i = 0; i < s.length; i++) {
    //console.log(s[i], i, s.indexOf(s[i]));
    if (s.indexOf(s[i]) === i) answer += s[i];
  }
  return answer;
}
console.log(solution("ksekkset"));
