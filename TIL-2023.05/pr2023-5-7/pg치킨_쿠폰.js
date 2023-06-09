// 프로그래머스 치킨은 치킨을 시켜먹으면 한 마리당 쿠폰을 한 장 발급합니다. 쿠폰을 열 장 모으면 치킨을 한 마리 서비스로 받을 수 있고, 서비스 치킨에도 쿠폰이 발급됩니다. 시켜먹은 치킨의 수 chicken이 매개변수로 주어질 때 받을 수 있는 최대 서비스 치킨의 수를 return하도록 solution 함수를 완성해주세요.


function solution(chicken) {
    let service = 0;
    let coupon = chicken;  // 치킨의 수와 쿠폰의 수는 같다.
    while(coupon >= 10) {  // 쿠폰이 10장 미만이면 아무 의미 없다
        service += parseInt(coupon / 10)  // 쿠폰 10장당 먹을 수 있는 서비스 치킨의 수
        coupon = parseInt(coupon / 10) + parseInt(coupon%10) // 쿠폰 10장당 먹을 수 있는 서비스 치킨의 수만큼 나온 새로운 쿠폰 + 나머지 쿠폰
    }
    return service;
}