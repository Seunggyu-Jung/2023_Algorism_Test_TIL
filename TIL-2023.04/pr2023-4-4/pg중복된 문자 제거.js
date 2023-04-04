// 문자열 my_string이 매개변수로 주어집니다. my_string에서 중복된 문자를 제거하고 하나의 문자만 남긴 문자열을 return하도록 solution 함수를 완성해주세요.


function solution(my_string) {
    return [...new Set(my_string)].join("");
}


// new Set(arr)은 중복된 요소가 없는 객체를 반환해준다. 이를 전개구문과 새로운 배열로 감싸 배열의 형태로 만들어주며, 마지막에 join메서드로 하나의 문자열로 만들어준다.