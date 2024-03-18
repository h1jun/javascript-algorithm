function solution(num_list) {
    let res = 0;
    for(let num of num_list) {
        while(true) {
            if(num === 1) break;
            if (num % 2 === 0) {
                num /= 2;
                res++;
            }
            else {
                num = (num-1) / 2
                res++;
            }
            
        }
    }
    return res;

}