type Shoe = {
  type: 'I' | 'R'
  size: number
}

function organizeShoes(shoes: Shoe[]): number[] {
  const shoeSizeCount: Record<string, number> = shoes.reduce(
    (acc, { size }) => {
      acc[size] ??= 0
      acc[size]++
      return acc
    },
    {}
  )

  const result = Object.entries(shoeSizeCount).flatMap(([key, val]) => {
    const shoeInventory: number[] = []

    for (let i = 0; i < Math.floor(val / 2); i++) {
      shoeInventory.push(+key)
    }

    return shoeInventory
  })

  return result
}

console.log(
  organizeShoes([
    { type: 'I', size: 38 },
    { type: 'R', size: 38 },
    { type: 'R', size: 42 },
    { type: 'I', size: 41 },
    { type: 'I', size: 42 }
  ])
)

console.log(
  organizeShoes([
    { type: 'I', size: 38 },
    { type: 'R', size: 38 },
    { type: 'I', size: 38 },
    { type: 'I', size: 38 },
    { type: 'R', size: 38 }
  ])
)
