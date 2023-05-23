function solution(babbling) {
    let answer = 0;
    
    const regex = /^(aya|ye|woo|ma)+$/;
    
    babbling.forEach(word=>{
        if(regex.test(word)) {
            answer += 1;
        }
    })
    
    return answer;
}