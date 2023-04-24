// 2차원 좌표 평면에 변이 축과 평행한 직사각형이 있습니다. 직사각형 네 꼭짓점의 좌표 [[x1, y1], [x2, y2], [x3, y3], [x4, y4]]가 담겨있는 배열 dots가 매개변수로 주어질 때, 직사각형의 넓이를 return 하도록 solution 함수를 완성해보세요.



// 가장 원시적인 풀이법
function solution(dots) {
    let answer = [];
    for(let i = 0; i< dots.length ; i++){
        if (dots[i][0] != dots[i+1][0]){
            answer.push(Math.abs(dots[i][0] - dots[i+1][0]))
            break;
        }
    }
    for(let i = 0; i< dots.length ; i++){
        if (dots[i][1] != dots[i+1][1]){
            answer.push(Math.abs(dots[i][1] - dots[i+1][1]))
            break;
        }
    }
    return answer[0] * answer[1];
}

// 더 직관적인 for문 풀이법

function solution(dots) {
    let x = [];
    let y = [];
    
    for (let i of dots){
        x.push(i[0])
        y.push(i[1])
    }
    return (Math.max(...x) - Math.min(...x)) * (Math.max(...y) - Math.min(...y));
}


// set을 이용한 풀이법

function solution(dots) {
    let x = [...new Set(dots.map(p => p[0]))]; // dots라는 2차원 배열에서 안쪽 배열만 뽑아내서 전개구문으로 풀어놓음
    let y = [...new Set(dots.map(p => p[1]))];
    return Math.abs((x[0]-x[1]) * (y[0]-y[1]));    
}

