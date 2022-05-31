function solution(s) {
  let answer = "YES";
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let str1 = "";
  let str2 = "";

  Array.from(s).forEach((str) => {
    if (alphabet.includes(str.toLowerCase())) str1 += str.toLowerCase();
  });

  s.split("")
    .reverse()
    .forEach((str) => {
      if (alphabet.includes(str.toLowerCase())) str2 += str.toLowerCase();
    });

  console.log(str1);
  console.log(str2);

  if (str1 !== str2) answer = "NO";

  return answer;
}

let str = "found7, time: study; Yduts; emit, 7Dnuof";
console.log(solution(str));

/*
강사님 풀이

function solution(s) {
  let answer = "YES";
  s = s.toLowerCase().replace(/[^a-z]/g, "");
  if (s.split("").reverse().join("") !== s) return "NO";
  return answer;
}

let str = "found7, time: study; Yduts; emit, 7Dnuof";
console.log(solution(str));
*/
