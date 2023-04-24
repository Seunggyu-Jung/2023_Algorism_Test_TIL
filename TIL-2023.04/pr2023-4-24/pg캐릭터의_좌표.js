// 캐릭터는 항상 [0,0]에서 시작할 때 키 입력이 모두 끝난 뒤에 캐릭터의 좌표 [x, y]를 return하도록 solution 함수를 완성해주세요.


// 처음 풀이
function solution(keyinput, board) {
    let mid = [0,0];
    let end = [(board[0]-1)/2,(board[1]-1)/2];
    for(let i of keyinput){
        if(i === "down"){
            if (mid[1] != -end[1]){
                mid[1] -= 1;
            }
        }
        if(i === "up"){
            if (mid[1] != end[1]){
                mid[1] += 1;
            }
        }
        if(i === "right"){
            if (mid[0] != end[0]){
                mid[0] += 1;
            }
        }
        if(i === "left"){
            if (mid[0] != -end[0]){
                mid[0] -= 1;
            }
        }
    }
    return mid;
}