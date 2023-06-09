/*
정수를 저장한 배열, arr 에서 가장 작은 수를 제거한 배열을 리턴하는 함수, solution을 완성해주세요. 단, 리턴하려는 배열이 빈 배열인 경우엔 배열에 -1을 채워 리턴하세요.
*/

function solution(arr) {
    let Min = Math.min(...arr);
    return arr.length != 1 ? arr.filter((el) => (el) != Min) : [-1];
}

console.log(solution([4,3,7,9])) // [ 4, 7, 9 ]