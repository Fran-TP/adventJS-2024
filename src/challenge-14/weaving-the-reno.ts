function minMovesToStables(reindeer: number[], stables: number[]): number {
  const [sortedReindeer, sortedStables] = [reindeer.sort(), stables.sort()]

  return sortedReindeer.reduce(
    (totalMoves, currentReindeer, idx) =>
      totalMoves + Math.abs(currentReindeer - sortedStables[idx]),
    0
  )
}

console.log(minMovesToStables([2, 6, 9], [3, 8, 5])) // -> 3
console.log(minMovesToStables([1, 1, 3], [1, 8, 4])) // -> 8
