// 영어 점수와 수학 점수의 평균 점수를 기준으로 학생들의 등수를 매기려고 합니다. 영어 점수와 수학 점수를 담은 2차원 정수 배열 score가 주어질 때, 영어 점수와 수학 점수의 평균을 기준으로 매긴 등수를 담은 배열을 return하도록 solution 함수를 완성해주세요.


// 초반에 풀은 방식 : for of 문 및 구조분해할당으로 풀이
function solution(score) {
    let average = [];
    let rank = [];
    for (let [i,j] of score){
        average.push((i + j) / 2)
        rank.push((i + j) / 2)
    }
    rank.sort((a,b) => b - a);
    return average.map((el) => rank.indexOf((el))+1);
}


// 보다 간단한 풀이  // map을 이용한 풀이

function solution(score) {
    let average = score.map((el) => ((el)[0] + (el)[1])/2)
    let rank = score.map((el) => ((el)[0] + (el)[1])/2).sort((a,b) => b - a);
    return average.map((el) => rank.indexOf((el)) + 1);
}