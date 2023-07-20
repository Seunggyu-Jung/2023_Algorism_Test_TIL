// 2016년 1월 1일은 금요일입니다. 2016년 a월 b일은 무슨 요일일까요? 두 수 a ,b를 입력받아 2016년 a월 b일이 무슨 요일인지 리턴하는 함수, solution을 완성하세요. 요일의 이름은 일요일부터 토요일까지 각각 SUN,MON,TUE,WED,THU,FRI,SAT
// 입니다. 예를 들어 a=5, b=24라면 5월 24일은 화요일이므로 문자열 "TUE"를 반환하세요.

// 처음 풀이 : 가능한 a 값을 살리며 코드를 작성 - 가독성이 떨어짐
function solution(a, b) {
  let weekend = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];
  let count = 0;
  for (let i = 1; i < a + 1; i++) {
    if (i === 2 || i === 4 || i === 6 || i === 8 || i === 9 || i === 11) {
      count += 31;
    } else if (i === 3) {
      count += 29;
    } else if (i === 1) {
      count += 0;
    } else {
      count += 30;
    }
  }
  count = count + b;
  return weekend[(count - 1) % 7];
}

// 가독성이 좋은 풀이 - 더할 달의 날짜 수를 배열로 정렬한다.
function solution(a, b) {
  let weekend = ["THU", "FRI", "SAT", "SUN", "MON", "TUE", "WED"]; // 1월 1일이 금요일이기에 인덱스 1에 금요일을 넣음
  let monthDay = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30];
  let count = b;
  for (let i = 0; i < a; i++) {
    count += monthDay[i];
  }
  return weekend[count % 7];
}
