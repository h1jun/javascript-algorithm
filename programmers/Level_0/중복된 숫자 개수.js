function solution(array, n) {
  // 1
  let res = 0;

  array.map((item) => {
    if (item === n) res++;
  });

  //2
  const res2 = array.filter((item) => item === n);

  console.log(res2.length);

  return res;
}
