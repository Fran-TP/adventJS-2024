function distributeWeight(weight: number): string {
  const boxRepresentations: Record<number, string[]> = {
    1: [' _ ', '|_|'],
    2: [' ___ ', '|___|'],
    5: [' _____ ', '|     |', '|_____|'],
    10: [' _________ ', '|         |', '|_________|']
  }

  const weightedBoxes: string[][] = []
  let weightClone = weight

  const giftDeliveryOrder = [10, 5, 2, 1]

  for (const boxWeight of giftDeliveryOrder) {
    const count = Math.floor(weightClone / boxWeight)
    weightClone %= boxWeight

    for (let i = 0; i < count; i++) {
      weightedBoxes.unshift(boxRepresentations[boxWeight])
    }
  }

  let result = ''

  for (let i = 0; i < weightedBoxes.length; i++) {
    const currBox = weightedBoxes[i]

    if (i < weightedBoxes.length - 1) {
      const nextBox = weightedBoxes[i + 1]
      const paddingLength = nextBox[0].trim().length + 1
      currBox[currBox.length - 1] = currBox[currBox.length - 1].padEnd(
        paddingLength,
        '_'
      )

      // deleted the cover of the next box to make it look like the boxes are stacked
      weightedBoxes[i + 1] = nextBox.slice(1)

      result += `${currBox.join('\n')}\n`
    }
  }

  return result + weightedBoxes.at(-1)?.join('\n')
}

console.log(distributeWeight(1), '\n')

console.log(distributeWeight(2), '\n')

console.log(distributeWeight(3), '\n')

console.log(distributeWeight(4), '\n')

console.log(distributeWeight(5), '\n')

console.log(distributeWeight(6), '\n')

console.log(distributeWeight(18), '\n')
