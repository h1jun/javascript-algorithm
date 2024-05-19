function solution(my_string) {
    const arr = my_string.split(' ');

    let res = +arr[0];

    for(let i = 2; i < arr.length; i+=2) {
        if(arr[i-1] === '+') res += +arr[i]
        else res -= +arr[i]
    }
    
    return res;
}