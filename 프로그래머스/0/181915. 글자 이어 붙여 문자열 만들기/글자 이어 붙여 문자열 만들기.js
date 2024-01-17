function solution(my_string, index_list) {
    let res = '';
    for(const idx of index_list) {
        res += my_string[idx];
    }
    return res;
}