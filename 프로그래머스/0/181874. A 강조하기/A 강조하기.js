function solution(myString) {
    const capital = ['B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    return [...myString.replaceAll('a', 'A')].map(el => capital.includes(el) ? el.toLowerCase() : el).join('');
}