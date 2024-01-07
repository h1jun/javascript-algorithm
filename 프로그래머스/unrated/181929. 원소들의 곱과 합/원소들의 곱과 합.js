function solution(num_list) {
    const sum = num_list.reduce((acc , cur) => acc + cur);
    const multi = num_list.reduce((acc , cur) => acc * cur);

    return multi > sum*sum ? 0 : 1;
}