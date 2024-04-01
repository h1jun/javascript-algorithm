function solution(myStr) {
    const temp1 = myStr.split("a").join('b');
    const temp2 = temp1.split("b").join('c');
    const temp3 = temp2.split("c");
    const res = temp3.filter(el => el);
    if(!res.length) res.push('EMPTY');
    return res;
}