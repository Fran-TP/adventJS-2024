function detectBombs(grid: boolean[][]): number[][] {
  const DIRECTIONAL_VECTORS = [
    { x: 0, y: -1 },
    { x: 0, y: 1 },
    { x: 1, y: 0 },
    { x: -1, y: 0 },
    { x: -1, y: -1 },
    { x: 1, y: -1 },
    { x: -1, y: 1 },
    { x: 1, y: 1 }
  ]

  return grid.map((row, y, gridReference) =>
    row.map((_, x) =>
      DIRECTIONAL_VECTORS.reduce(
        (acc, { x: dx, y: dy }) => ~~gridReference[y + dy]?.[x + dx] + acc,
        0
      )
    )
  )
}

console.log(
  detectBombs([
    [true, false, false],
    [false, true, false],
    [false, false, false]
  ])
)
// [
//   [1, 2, 1],
//   [2, 1, 1],
//   [1, 1, 1]
// ]

console.log(
  detectBombs([
    [true, false],
    [false, false]
  ])
)
// [
//   [0, 1],
//   [1, 1]
// ]

console.log(
  detectBombs([
    [true, true],
    [false, false],
    [true, true]
  ])
)

// [
//   [1, 1],
//   [4, 4],
//   [1, 1]
// ]
