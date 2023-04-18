// 문자열 my_str과 n이 매개변수로 주어질 때, my_str을 길이 n씩 잘라서 저장한 배열을 return하도록 solution 함수를 완성해주세요.

function solution(my_str, n) {
    let reg = new RegExp(`.{1,${n}}`, 'g')  // 파라미터 n은 정규표현식에서 사용하기 위해서 템플릿 리터럴로 사용해야 한다..?
    return my_str.match(reg);
}