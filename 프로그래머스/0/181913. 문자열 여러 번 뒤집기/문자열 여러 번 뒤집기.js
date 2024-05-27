function solution(my_string, queries) {
    queries.forEach(el => {
        const insertStr = my_string.slice(el[0], el[1]+1).split('').reverse().join('');
        const front = my_string.slice(0, el[0]);
        const back = my_string.slice(el[1]+1);
        my_string = front + insertStr + back;
    })
    return my_string;

}