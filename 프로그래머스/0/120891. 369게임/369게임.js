function solution(order) {
    const orderStr = String(order)
    const num = ['3', '6', '9'];
    let res = 0;
    for(let i = 0; i < orderStr.length; i++) {
        orderStr[i].split('').forEach(el => {
            if(num.includes(el)) res++;
        })
    }
    return res;
}