const fs = require('fs');
const text = fs.readFileSync('./input.txt').toString('utf-8')

const calibrationTextArray = text.split('\n')

const answer = calibrationTextArray.reduce((acc, item) => {
  const numbers = [...item.matchAll(/(\d)/g)]
  acc += +(numbers[0][0] + numbers[numbers.length - 1][0])
  return acc
}, 0)

console.log('Answer: ', answer)