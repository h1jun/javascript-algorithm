function solution(polynomial) {
    let terms = polynomial.split('+').map(term => term.trim());
    let xCoefficient = 0;
    let constant = 0;

    terms.forEach(term => {
        if (term.includes('x')) {
            let xTerm = term.split('x')[0].trim();
            if (xTerm === "") xCoefficient += 1;
            else xCoefficient += parseInt(xTerm);
        } else {
            constant += parseInt(term);
        }
    });

    let result = '';
    if (xCoefficient !== 0) {
        if (xCoefficient === 1) result += 'x';
        else result += `${xCoefficient}x`;
    }
    if (constant !== 0) {
        if (result !== '' && constant > 0) result += ` + ${constant}`;
        else result += constant; 
    }
    return result
}
