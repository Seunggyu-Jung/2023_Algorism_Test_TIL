// 문자열 my_string이 매개변수로 주어집니다. my_string은 소문자, 대문자, 자연수로만 구성되어있습니다. my_string안의 자연수들의 합을 return하도록 solution 함수를 완성해주세요.


function solution(my_string) {
    return (my_string.match(/\d+/g) ?? []).reduce((a,c) => +a + +c, 0);  // 숫자가 2자릿수가 넘어갈 수 있기때문에, \d에 +를 한 \d+로 범위를 잡아준다.
}


