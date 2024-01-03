function solution(my_string, is_prefix) {
    const arr = [];
    let word = '';
    
    for(string of my_string) {
        word += string;
        arr.push(word);
    }
    
    return arr.includes(is_prefix) ? 1 : 0;
}