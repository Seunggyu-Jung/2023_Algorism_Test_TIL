

function solution(lines) {
    let answer = 0;
    
    const arr = new Array(200);
    arr.fill(0)
    
    for (let i = 0; i<lines.length; i++) {
        let start = lines[i][0];
        let end = lines[i][1];
        
        for (let j = start; j<end; j++) {
            arr[j+100] += 1;
        }
    }
    
    for (const i of arr) {
        if(i > 1) {
            answer += 1;
        }
    }
    
    return answer;
}