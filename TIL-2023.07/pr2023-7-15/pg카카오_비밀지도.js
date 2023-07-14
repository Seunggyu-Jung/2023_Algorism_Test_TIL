// 지도는 한 변의 길이가 n인 정사각형 배열 형태로, 각 칸은 "공백"(" ") 또는 "벽"("#") 두 종류로 이루어져 있다.
// 전체 지도는 두 장의 지도를 겹쳐서 얻을 수 있다. 각각 "지도 1"과 "지도 2"라고 하자. 지도 1 또는 지도 2 중 어느 하나라도 벽인 부분은 전체 지도에서도 벽이다. 지도 1과 지도 2에서 모두 공백인 부분은 전체 지도에서도 공백이다.
// "지도 1"과 "지도 2"는 각각 정수 배열로 암호화되어 있다.
// 암호화된 배열은 지도의 각 가로줄에서 벽 부분을 1, 공백 부분을 0으로 부호화했을 때 얻어지는 이진수에 해당하는 값의 배열이다.

// 처음 풀이: 오답
function solution(n, arr1, arr2) {
  let answer = Array(n).fill(""); // 틀린이유1 : 빈 배열로 작성해야 동적으로 요소를 추가하는데 효율적이다.
  for (let i = 0; i < n; i++) {
    let one = [...arr1[i].toString(2)];
    let two = [...arr2[i].toString(2)];
    if (one.length < n) {
      for (let j = 0; j < n - one.length; j++) {
        one.unshift("0"); // unshift로 0을 추가하는 것은 나머지 요소들을 뒤로 보내는 작업을 반복하는 것이라 비효율적이다.
      }
    }
    if (two.length < n) {
      for (let h = 0; h < n - two.length; h++) {
        two.unshift("0");
      }
    }
    for (let k = 0; k < n; k++) {
      if (one[k] === "0" && two[k] === "0") {
        answer[k] += " "; // 반복문 안에 새로운 변수를 만들어서 한번에 answer에 넣는 것이 효율적이다.
      } else {
        answer[k] += "#";
      }
    }
  }
  return answer;
}

// 정답 : chatGPT - padStart를 사용
function solution(n, arr1, arr2) {
  let answer = [];
  for (let i = 0; i < n; i++) {
    let one = arr1[i].toString(2).padStart(n, "0"); // padStart(특정 길이,채울 인자) : 문자열을 특정 길이로 채우면, 원래 문자열이 지정된 길이보다 짧은 경우 앞에 두번째 인자를 채워 길이를 같게 한다.
    let two = arr2[i].toString(2).padStart(n, "0");
    let row = "";
    for (let j = 0; j < n; j++) {
      if (one[j] === "0" && two[j] === "0") {
        row += " ";
      } else {
        row += "#";
      }
    }
    answer.push(row);
  }
  return answer;
}

// 정규표현식 풀이 : 비트 연산자 사용 / 초단기로 풀림
var solution = (n, a, b) =>
  a.map((a, i) =>
    (a | b[i]).toString(2).padStart(n, 0).replace(/0/g, " ").replace(/1/g, "#")
  );
