function solution(s) {
    const numArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    const strArr = {
        zero: '0',
        one: '1',
        two: '2',
        three: '3',
        four: '4',
        five: '5',
        six: '6',
        seven: '7',
        eight: '8',
        nine: '9',
    }
    
    let res = '';
    let tempString = '';
    
    for(let i = 0; i < s.length; i++) {
        if(numArr.includes(s[i])) res += s[i];
        else tempString += s[i];
        
        if(strArr[tempString]) {
          res+= strArr[tempString];
          tempString = '';
        } 
    }

    return +res;
}