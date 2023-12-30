function solution(my_string) {
    const vowel = ['a', 'e', 'i', 'o', 'u']
    let answer = '';
    for(string of my_string) {
        if(!vowel.includes(string)) answer += string;
    }
    return answer;
}