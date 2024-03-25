function solution(my_string) {
    const arr = [];
    let str = ''
    let res = 0;
    console.log(1 + 1205);
    
    [...my_string].forEach(el => {
        if(!isNaN(el)) {
            str += el;
        } else {
            if(str !== '') res+= Number(str);
            str = '';
        }
        
    })
    if(str !== '') res+= Number(str);
    return res;
}