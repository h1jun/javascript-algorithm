function solution(my_string) {
    const arr = Array(52).fill(0);
    for(let i = 0; i < my_string.length; i++) {
        const alpha = my_string.charCodeAt(i);
        if (alpha >= 65 && alpha <= 90){
            arr[alpha-65] += 1
        } else {
            arr[alpha-71] += 1
        }
    }
    return arr;
}