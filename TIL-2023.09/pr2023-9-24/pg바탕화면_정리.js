// 머쓱이의 컴퓨터 바탕화면의 상태를 나타내는 문자열 배열 wallpaper가 매개변수로 주어질 때 바탕화면의 파일들을 한 번에 삭제하기 위해 최소한의 이동거리를 갖는 드래그의 시작점과 끝점을 담은 정수 배열을 return하는 solution 함수를 작성해 주세요. 드래그의 시작점이 (lux, luy), 끝점이 (rdx, rdy)라면 정수 배열 [lux, luy, rdx, rdy]를 return하면 됩니다.

// 내 풀이 : 반복문을 4개나 사용하여 풀이, 정답은 맞지만 코드가 상당히 복잡하고 시간이 오래걸린다는 단점이 있다.
function solution(wallpaper) {
  let answer = Array(4).fill(0);
  let frontCount = [];
  let backCount = [];
  for (let i = 0; i < wallpaper.length; i++) {
    if (wallpaper[i].includes('#')) {
      answer[0] += i;
      break;
    }
  }
  for (let j = wallpaper.length - 1; j >= 0; j--) {
    if (wallpaper[j].includes('#')) {
      answer[2] += j + 1;
      break;
    }
  }
  for (let h of wallpaper) {
    for (let a = 0; a < h.length; a++) {
      if (h[a] === '#') {
        frontCount.push(a);
        break;
      }
    }
    for (let a = 0; a < h.length; a++) {
      if (h[h.length - 1 - a] === '#') {
        backCount.push(h.length - a);
        break;
      }
    }
  }
  answer[1] += Math.min(...frontCount);
  answer[3] += Math.max(...backCount);
  return answer;
}

// 가장 깔끔한 풀이 : 만들어질 수 있는 최소크기의 사각형의 좌표를 구하여 계산
function solution(wallpaper) {
  let left = [];
  let right = [];
  let top = [];
  let bottom = [];
  wallpaper.map((v, i) => {
    [...v].map((value, index) => {
      if (value === '#') {
        left.push(i);
        top.push(index);
        right.push(i + 1);
        bottom.push(index + 1);
      }
    });
  });
  return [
    Math.min(...left),
    Math.min(...top),
    Math.max(...right),
    Math.max(...bottom),
  ];
}
