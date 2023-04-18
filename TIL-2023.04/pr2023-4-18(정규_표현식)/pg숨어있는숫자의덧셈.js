// 문자열 my_string이 매개변수로 주어집니다. my_string안의 모든 자연수들의 합을 return하도록 solution 함수를 완성해주세요.



// 정규 표현식1 : 숫자를 찾아 더한다
function solution(my_string) {
    return my_string.match(/[0-9]/g)  // match는 문자열을 배열로 만들어주기에 바로 reduce를 사용할 수 있다.
                    .reduce((a,c) => +a + +c, 0);
}



// 정규 표현식2 : 문자를 찾아 제거한다

function solution(my_string) {
    return [...my_string.replace(/[a-zA-Z]/g,"")]  // replace는 문자열을 배열로 만들수 없기 때문에, 전개구문으로 배열로 만들어서 reduce를 사용한다.
            .reduce((a,c) => +a + +c, 0);
}