const fs = require('fs');
const text = fs.readFileSync('./input.txt').toString('utf-8')
const calibrationTextArray = text.split('\n')

const translation = {'one': 1,'two': 2,'three': 3,'four': 4,'five': 5,'six': 6,'seven': 7,'eight': 8,'nine': 9}

const stringNum = ['one','two','three','four','five','six','seven','eight','nine']

const numNum = [1,2,3,4,5,6,7,8,9]

const allNum = [...stringNum, ...numNum]

const answer = calibrationTextArray.reduce((acc, row) => {
  // First
  const indexes = allNum.map((item) => row.indexOf(item) === -1 ? null : {value: item, index: row.indexOf(item)})
  const filteredIndexes = indexes.filter((item) => item !== null)
  filteredIndexes.sort(({index: indexA}, {index: indexB}) => indexA < indexB ? -1 : indexB < indexA ? 1 : 0)
  const firstValue = filteredIndexes[0].value

  // Last
  const lastIndexes = allNum.map((item) => row.lastIndexOf(item) === -1 ? null : {value: item, index: row.lastIndexOf(item)})
  const filteredLastIndexes = lastIndexes.filter((item) => item !== null)
  filteredLastIndexes.sort(({index: indexA}, {index: indexB}) => indexA > indexB ? -1 : indexB > indexA ? 1 : 0)
  const lastValue = filteredLastIndexes[0].value

  const firstNumber = translation[firstValue] || firstValue
  const lastNumber = translation[lastValue] || lastValue

  acc += +((''+firstNumber) + (''+lastNumber))

  return acc
}, 0)

console.log('Answer: ', answer)
