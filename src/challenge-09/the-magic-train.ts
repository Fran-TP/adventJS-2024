type Space = '·' | '@' | '*' | 'o'
type Board = string[]
type Movement = 'U' | 'D' | 'R' | 'L'
type Result = 'none' | 'crash' | 'eat'

function moveTrain(board: Board, mov: Movement): Result {
  const movementMap = {
    U: { x: 0, y: -1 },
    D: { x: 0, y: 1 },
    L: { x: -1, y: 0 },
    R: { x: 1, y: 0 }
  }

  const resultMap = {
    '*': 'eat',
    '·': 'none',
    o: 'crash',
    undefined: 'crash'
  }

  let position: { x: number; y: number } = { x: 0, y: 0 }

  for (let y = 0; y < board.length; y++) {
    const row = board[y]
    const x = row.indexOf('@')

    if (x !== -1) {
      position = { x, y }
      break
    }
  }
  const { x, y } = movementMap[mov]
  const moveResult = board?.[position.y + y]?.[position.x + x]

  return resultMap[moveResult]
}

const board: Board = ['·····', '*····', '@····', 'o····', 'o····']

console.log(moveTrain(board, 'U'))
// ➞ 'eat'
// Because the train moves up and finds a magical fruit

console.log(moveTrain(board, 'D'))
// ➞ 'crash'
// The train moves down and the head crashes into itself

console.log(moveTrain(board, 'L'))
// ➞ 'crash'
// The train moves to the left and crashes into the wall

console.log(moveTrain(board, 'R'))
// ➞ 'none'
// The train moves to the right and there is empty space on the right
