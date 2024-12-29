function isRobotBack(moves: string): true | [number, number] {
  let robotCoordinates: [number, number] = [0, 0]
  const uniqueMovements = new Set<string>()
  const movementInverseMap = {
    U: 'D',
    L: 'R',
    R: 'L',
    D: 'U'
  }
  const movementVectors: Record<string, { x: number; y: number }> = {
    U: { x: 0, y: 1 },
    D: { x: 0, y: -1 },
    L: { x: -1, y: 0 },
    R: { x: 1, y: 0 }
  }

  for (let i = 0; i < moves.length; ) {
    const curr = moves[i]
    const next = moves[i + 1]

    if (movementVectors[curr]) {
      const { x, y } = movementVectors[curr]
      robotCoordinates = [x + robotCoordinates[0], y + robotCoordinates[1]]
      uniqueMovements.add(curr)
      i++
      continue
    }

    const { x, y } = movementVectors[next]

    if (curr === '*') {
      robotCoordinates = [
        2 * x + robotCoordinates[0],
        2 * y + robotCoordinates[1]
      ]
      uniqueMovements.add(next)
    }

    if (curr === '!') {
      const { x: dx, y: dy } = movementVectors[movementInverseMap[next]]
      robotCoordinates = [dx + robotCoordinates[0], dy + robotCoordinates[1]]
      uniqueMovements.add(movementInverseMap[next])
    }

    if (curr === '?' && !uniqueMovements.has(next)) {
      robotCoordinates = [x + robotCoordinates[0], y + robotCoordinates[1]]
      uniqueMovements.add(next)
    }

    i += 2
  }

  return robotCoordinates[0] === robotCoordinates[1] || robotCoordinates
}

console.log(isRobotBack('R')) // [1, 0]
console.log(isRobotBack('RL')) // true
console.log(isRobotBack('RLUD')) // true
console.log(isRobotBack('*RU')) // [2, 1]
console.log(isRobotBack('R*U')) // [1, 2]
console.log(isRobotBack('LLL!R')) // [-4, 0]
console.log(isRobotBack('R?R')) // [1, 0]
console.log(isRobotBack('U?D')) // true
console.log(isRobotBack('R!L')) // [2,0]
console.log(isRobotBack('U!D')) // [0,2]
console.log(isRobotBack('R?L')) // true
console.log(isRobotBack('U?U')) // [0,1]
console.log(isRobotBack('*U?U')) // [0,2]
console.log(isRobotBack('U?D?U')) // true
