function solution(phone_number) {
    let answer = '';

    answer += ('*'.repeat(phone_number.length-4)) + (phone_number.slice(phone_number.length-4,phone_number.length+1))
    
    return answer;
}