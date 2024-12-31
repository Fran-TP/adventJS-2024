function generateGiftSets(gifts: string[]): string[][] {
  const result: string[][] = []

  const generateCombinations = (current: string[], index: number): void => {
    if (current.length > 0) {
      result.push([...current])
    }

    for (let i = index; i < gifts.length; i++) {
      current.push(gifts[i])
      generateCombinations(current, i + 1)
      current.pop()
    }
  }

  generateCombinations([], 0)

  return result.sort((a, b) => a.length - b.length)
}

console.log(generateGiftSets(['car', 'doll', 'puzzle']))
// [
//   ['car'],
//   ['doll'],
//   ['puzzle'],
//   ['car', 'doll'],
//   ['car', 'puzzle'],
//   ['doll', 'puzzle'],
//   ['car', 'doll', 'puzzle']
// ]

console.log(generateGiftSets(['ball']))
// // [
// //   ['ball']
// // ]

console.log(generateGiftSets(['game', 'pc']))
// // [
// //   ['game'],
// //   ['pc'],
// //   ['game', 'pc']
// // ]
