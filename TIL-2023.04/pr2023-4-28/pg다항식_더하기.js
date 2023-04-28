// 한 개 이상의 항의 합으로 이루어진 식을 다항식이라고 합니다. 다항식을 계산할 때는 동류항끼리 계산해 정리합니다. 덧셈으로 이루어진 다항식 polynomial이 매개변수로 주어질 때, 동류항끼리 더한 결괏값을 문자열로 return 하도록 solution 함수를 완성해보세요. 같은 식이라면 가장 짧은 수식을 return 합니다.

function solution(polynomial) {
    let x1 = polynomial.split(" ").filter((el) => (el).match(/[0-9][a-zA-Z]/g));
    let x2 = polynomial.split(" ").filter((el) => !x1.includes((el)) && (el).match(/[a-zA-Z]/g));
    let num = polynomial.split(" ").filter((el) => !x1.includes((el)) && (el).match(/[0-9]/g));
    let x3 = ""
    let answer = '';
    if (x2.length > 0) {
        x3 += x2.length;
        x3 += "x";
        x1.push(x3); 
    }
    if (x1.length > 0){
        answer += x1.reduce((a, c) => a + parseInt(c.slice(0,-1)), 0);
        answer += "x"
        if(answer === "1x") {
            answer = "x"
        }
    }
    if (num.length >0 && x1.length > 0) {
        answer += " + ";
        answer += num.reduce((a, c) => a + parseInt(c) , 0);
    } else if(num.length >0 && x1.length === 0 ) {
        answer += num.reduce((a, c) => a + parseInt(c), 0);
    }
    return answer;
}