function solution(num_list) {
    const even = num_list.filter((el, idx) => idx % 2 !== 0).reduce((acc, cur) => acc + cur);
    const odd = num_list.filter((el, idx) => idx % 2 === 0).reduce((acc, cur) => acc + cur);
    return even >= odd ? even : odd;
}