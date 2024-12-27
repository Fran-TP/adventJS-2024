function isTreesSynchronized(
  tree1: { value: string; left?: any; right?: any } | undefined,
  tree2: { value: string; left?: any; right?: any } | undefined
): [boolean, string] {
  const queue1 = [tree1]
  const queue2 = [tree2]

  const head1 = tree1?.value

  while (queue1.length && queue2.length) {
    const node1 = queue1.shift()
    const node2 = queue2.pop()

    if (node1?.value !== node2?.value) {
      return [false, head1]
    }

    if (node1?.left && node2?.right) {
      queue1.push(node1.left)
      queue2.push(node2.right)
    }
  }

  return [true, head1]
}

const tree1 = {
  value: '🎄',
  left: { value: '⭐' },
  right: { value: '🎅' }
}

const tree2 = {
  value: '🎄',
  left: { value: '🎅' },
  right: { value: '⭐' }
}

const tree3 = {
  value: '🎄',
  left: { value: '🎅' },
  right: { value: '🎁' }
}

const tree4 = {
  value: '🎄',
  left: { value: '⭐' },
  right: { value: '🎅' }
}

console.log(isTreesSynchronized(tree1, tree2)) // [true, '🎄']
console.log(isTreesSynchronized(tree1, tree3)) // [false, '🎄']
console.log(isTreesSynchronized({ value: '🎅' }, { value: '🧑‍🎄' })) // [false, '🎅']
