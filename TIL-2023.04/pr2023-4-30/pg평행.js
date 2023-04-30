// 주어진 네 개의 점을 두 개씩 이었을 때, 두 직선이 평행이 되는 경우가 있으면 1을 없으면 0을 return 하도록 solution 함수를 완성해보세요.

// 처음 풀이한 방법 : 그냥 안풀림

function solution(dots) {
    let pol = [];
    for (let [i,j] of dots){
        pol.push(i,j)
    }
    pol.sort((a,b) => a - b)
    let set = 0
    for (let h = 0; h < 7 ; h+=2){
        if(pol[h] === pol[h+1]){
            set += 1;
        }
    }
    if (set === 4){
        return 1
    } else {
    let bit = [];
    for (let i = 0; i< dots.length; i++){
        for(let j = 0; j < dots.length; j++){
            if(i !== j){
              bit.push((Math.abs(dots[i][1] - dots[j][1]) / Math.abs(dots[i][0] - dots[j][0])))    
            }  
        }
    }
    bit.sort((a,b) => a - b)
    let col = 0
    for (let g = 0; g < bit.length ; g++){
        for(let k = 0; k < bit.length; k++){
            if(g !== k){
                if(bit[g] === bit[k]){
                col += 1;
        }          
            }
        }
    }
    if (col > 0){
        return 1
    } else {
        return 0
    }
    }
}


// 모범 답안 (구조분해할당을 사용)

function solution(dots) {
    var [a,b,c,d] = dots;  // 구조 분해 할당으로 보다 간단하게 풀이 가능

    var ab = (a[0]-b[0]) / (a[1]-b[1]);  // 기울기 구하는 공식 : y / x
    var ac = (a[0]-c[0]) / (a[1]-c[1]);
    var ad = (a[0]-d[0]) / (a[1]-d[1]);
    var bc = (b[0]-c[0]) / (b[1]-c[1]);
    var bd = (b[0]-d[0]) / (b[1]-d[1]);
    var cd = (c[0]-d[0]) / (c[1]-d[1]);

    var answer = ( ab == cd || ac == bd || ad == bc)?1:0; 
    return answer;
}