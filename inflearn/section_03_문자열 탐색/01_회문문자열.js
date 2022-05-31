function solution(s) {
  let answer = "NO";
  const reverseStr = s.split("").reverse().join("");
  if (s.toLowerCase() === reverseStr.toLowerCase()) answer = "YES";

  return answer;
}

let str = "goooG";
console.log(solution(str));

/* 
강사님 풀이
function solution(s) {
  let answer = "YES";
  s = s.toLowerCase();
  let len = s.length;
  for (let i = 0; i < Math.floor(len / 2); i++) {
    if (s[i] != s[len - i - 1]) return "NO";
  }
  return answer;
}

let str = "goooG";
console.log(solution(str));
*/
