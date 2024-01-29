function solution(myString) {
    return [...myString].map(str => {
        if(str.charCodeAt() < 'l'.charCodeAt()) return 'l'
        else return str
    }).join('')
}