function solution(order) {
    let totalPrice = 0;
    order.forEach(el => {
        if(el.search('americano') !== -1) totalPrice += 4500;
        else if(el.search('cafelatte') !== -1) totalPrice += 5000;
        else totalPrice += 4500;
    })
    return totalPrice;
}