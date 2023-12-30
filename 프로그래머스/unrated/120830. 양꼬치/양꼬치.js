function solution(n, k) {
    const foodPrice = 12000;
    const drinkPrice = 2000;
    const service = Math.floor(n / 10);
    const drinkCount = k - service
    return (n * foodPrice) + (drinkCount * drinkPrice) ;
}