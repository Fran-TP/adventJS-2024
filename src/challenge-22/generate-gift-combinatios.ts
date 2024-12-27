function generateGiftSets(gifts: string[]): string[][] {
  // order is important, so we can't use a set

  const result: string[][] = []
  const len = gifts.length
  const total = 2 ** len
  for (let i = 1; i < total; i++) {
    const binary = i.toString(2).padStart(len, '0')
    const set: string[] = []
    for (let j = 0; j < binary.length; j++) {
      if (binary[j] === '1') {
        set.push(gifts[j])
      }
    }
    result.push(set)
  }
  return result
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
// [
//   ['ball']
// ]

console.log(generateGiftSets(['game', 'pc']))
// [
//   ['game'],
//   ['pc'],
//   ['game', 'pc']
// ]
