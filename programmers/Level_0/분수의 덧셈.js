function solution(numer1, denom1, numer2, denom2) {
  // 최대 공배수 구한 뒤 나눠주기
  const denominator = denom1 * denom2; // 분모

  const AfterNum1 = numer1 * (denominator / denom1);
  const AfterNum2 = numer2 * (denominator / denom2);

  const molecule = AfterNum1 + AfterNum2; // 분자

  const gcdNumber = gcd(molecule, denominator); // 최대공약수

  return [(AfterNum1 + AfterNum2) / gcdNumber, denominator / gcdNumber]; // 분모 분자를 최대공약수로 나눈 결과값
}

function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}
