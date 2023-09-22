// N이 주어졌을 때, fibonacci(N)을 호출했을 때, 0과 1이 각각 몇 번 출력되는지 구하는 프로그램을 작성하시오.

const input = require('fs')
  .readFileSync('예제.txt')
  .toString()
  .split('\n')
  .map((v, _) => v.replace('\r', ''));
let answer = '';

for (let i = 1; i < input.length; i++) {
  let one = [0, 1];
  let zero = [1, 1];
  let zeroCount = 0;
  let oneCount = 0;
  for (let j = 0; j < input[i]; j++) {
    if (j === 0) {
      zeroCount += 1;
    } else if (j === 1) {
      oneCount += 1;
    }
    one.push(oneCount);
    zero.push(zeroCount);
  }
}

console.log(input);
