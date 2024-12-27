function compile(instructions: string[]): number | undefined {
  const context = new Map<string, number>()
  const instructionsMap: Record<string, { valIdx: number; varIdx: number }> = {
    MOV: { valIdx: 1, varIdx: 2 },
    INC: { valIdx: 2, varIdx: 1 },
    JMP: { valIdx: 2, varIdx: 1 },
    DEC: { valIdx: 2, varIdx: 1 }
  }

  let i = 0

  while (i < instructions.length) {
    const currentInstruction = instructions[i].split(' ')
    const [action] = currentInstruction
    const { valIdx, varIdx } = instructionsMap[action]
    const bar = currentInstruction[varIdx]
    const val = currentInstruction[valIdx] ?? 0

    if (action === 'MOV') {
      const oldVal = context.get(Number.isNaN(Number(val)) ? val : bar)
      const newVal = oldVal ?? val

      context.set(bar, Number(newVal))
    }

    if (action === 'INC') {
      const oldVal = context.get(bar)
      const newVal = oldVal !== undefined ? oldVal + 1 : 1

      context.set(bar, newVal)
    }

    if (action === 'DEC') {
      const oldVal = context.get(bar)
      const newVal = oldVal !== undefined ? oldVal - 1 : -1

      context.set(bar, newVal)
    }

    if (action === 'JMP') {
      const oldVal = context.get(bar)

      i = oldVal === 0 ? Number(val) : ++i

      continue
    }

    i++
  }

  return context.get('A')
}

const instructions = [
  'MOV -1 C', // copia -1 al registro 'C',
  'INC C', // incrementa el valor del registro 'C'
  'JMP C 1', // salta a la instrucción en el índice 1 si 'C' es 0
  'MOV C A', // copia el registro 'C' al registro 'a',
  'INC A' // incrementa el valor del registro 'a'
]

console.log(compile(instructions)) // -> 2
console.log(compile(['INC A', 'INC A', 'DEC A', 'MOV A B'])) // -> 1
console.log(compile(['INC C', 'DEC B', 'MOV C Y', 'INC Y'])) // -> 2
