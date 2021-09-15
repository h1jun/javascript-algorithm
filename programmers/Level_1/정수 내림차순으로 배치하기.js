function solution(n) {
    let answer = '';
    
    let arr = String(n).split('');
    
    let tempArr = [];
    
    for(let i = 0; i < arr.length; i++) {
        tempArr.push(Number(arr[i]));                
    }
    
    tempArr.sort().reverse()
   
    for(let i = 0; i < tempArr.length; i++) {
        answer += String(tempArr[i])                
    }

    return Number(answer);
}

// 다른 풀이
function solution(n) {
    return Number(n.toString().split("").sort().reverse().join(""))
}

//String(n).split(''); 을 n(toString().split(""))