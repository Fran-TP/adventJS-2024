export function createFrame(names: string[]): string {
  const maximumNameLength = Math.max(...names.map(name => name.length))

  const borderLine = '*'.repeat(maximumNameLength + 4)
  const borderedNames = names.map(
    name => `* ${name.padEnd(maximumNameLength, ' ')} *`
  )

  return [borderLine, ...borderedNames, borderLine].join('\n')
}
