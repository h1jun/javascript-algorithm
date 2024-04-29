function solution(spell, dic) {
//     const word = spell.sort().join('');
//     let res = 2;
//     dic.forEach(el => {
//         const dicWord = [...el].sort().join('');
//         if(word === dicWord) res = 1;
//     })
 
//     return res;
    
    return dic.filter(v => spell.every(c => v.includes(c))).length ? 1 : 2;
}