function fixPackages(packages: string): string {
  const stack: string[] = []

  for (const char of packages) {
    if (char === ')') {
      let temp = ''

      while (stack?.at(-1) !== '(') {
        temp += stack.pop()
      }

      stack.pop()

      for (const charToReverse of temp) {
        stack.push(charToReverse)
      }
    } else {
      stack.push(char)
    }
  }

  return stack.join('')
}
