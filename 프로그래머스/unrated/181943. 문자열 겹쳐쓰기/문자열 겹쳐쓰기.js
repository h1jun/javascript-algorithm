function solution(my_string, overwrite_string, s) {
    const first = my_string.substring(0, s);
    const last = my_string.substring(s + overwrite_string.length, my_string.length); 
    return first + overwrite_string + last;
}