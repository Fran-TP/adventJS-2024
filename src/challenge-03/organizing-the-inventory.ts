interface Inventory {
  name: string
  quantity: number
  category: string
}

export function organizeInventory(inventory: Inventory[]): object {
  const organizedInventory = inventory.reduce(
    (acc, { name, quantity, category }) => {
      acc[category] ??= {}

      acc[category][name] = ~~acc[category][name] + quantity

      return acc
    },
    {}
  )

  return organizedInventory
}

console.log(
  organizeInventory([
    { name: 'book', quantity: 10, category: 'education' },
    { name: 'book', quantity: 5, category: 'education' },
    { name: 'paint', quantity: 3, category: 'art' }
  ])
)

console.log(
  organizeInventory([
    { name: 'doll', quantity: 5, category: 'toys' },
    { name: 'car', quantity: 3, category: 'toys' },
    { name: 'ball', quantity: 2, category: 'sports' },
    { name: 'car', quantity: 2, category: 'toys' },
    { name: 'racket', quantity: 4, category: 'sports' }
  ])
)
