function solution(arr1, arr2) {
    let answer = [];

    for (let i = 0; i < arr1.length; i++) {
        let tempArr = []
        for(let j = 0; j < arr1[0].length; j++) {
            tempArr.push(arr1[i][j] + arr2[i][j])
        }
        answer.push(tempArr)
    }

    return answer;
}


// 다른 풀이
function solution(arr1, arr2) {
    return arr1.map((item,i) => item.map((item2, j) => item2 + arr2[i][j]));
}