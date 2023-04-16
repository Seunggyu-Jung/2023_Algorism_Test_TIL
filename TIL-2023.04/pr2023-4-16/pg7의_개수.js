// 머쓱이는 행운의 숫자 7을 가장 좋아합니다. 정수 배열 array가 매개변수로 주어질 때, 7이 총 몇 개 있는지 return 하도록 solution 함수를 완성해보세요.


// 처음 풀이한 풀이법

function solution(array) {
    return array.toString()
                .split("")
                .filter((el) => (el) == "7")    
                .length;
}


// 좀 더 심플한 풀이법 : 0.02초 더 빠름

function solution(array) {
    return array.join('')
                .split('7')
                .length-1;
}

