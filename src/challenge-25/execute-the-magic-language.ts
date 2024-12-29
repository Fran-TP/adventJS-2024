function execute(code: string): number {
  let bar = 0

  for (let i = 0; i < code.length; ) {
    const currCode = code[i]
    console.log({ currCode, i, bar })
    if (currCode === '>') {
      i++
    }

    if (currCode === '+') {
      ++bar
      ++i
    }

    if (currCode === '-') {
      --bar
      ++i
    }

    if (currCode === '[') {
      i = code.indexOf(']', i) + 1
      bar = 0
    }

    if (currCode === '{') {
      if (bar === 0) {
        i = code.indexOf('}', i) + 1
      } else {
        i++
      }
    }

    if (currCode === '}') {
      i++
    }
  }

  return bar
}

console.log(execute('+++')) // 3
console.log(execute('+--')) // -1
console.log(execute('>+++[-]')) // 0
console.log(execute('>>>+{++}')) // 3
console.log(execute('+{[-]+}+')) // 2
console.log(execute('{+}{+}{+}')) // 0
console.log(execute('------[+]++')) // 2
console.log(execute('-[++{-}]+{++++}')) // 5
