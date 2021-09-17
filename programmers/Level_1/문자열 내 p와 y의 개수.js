function solution(s){
    s = s.toUpperCase();
    let pCnt = 0;
    let yCnt = 0;

    s.split('').forEach(el => {
        if(el === 'P') {
            pCnt++;
        } else if(el === 'Y') {
            yCnt++;
        }
    })

    let ans = false;

    if (pCnt === yCnt) {
        ans = true;
    }

    return ans;
}


// 다른 풀이
function numPY(s) {
    return s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length;
}