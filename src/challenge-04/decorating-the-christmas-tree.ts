export function createXmasTree(height: number, ornament: string): string {
  let tree = ''
  const base = `${'_'.repeat(height - 1)}#${'_'.repeat(height - 1)}`

  for (let i = 1; i <= height; i++) {
    const padding = '_'.repeat(height - i)
    const row = `${padding}${ornament.repeat(i + i - 1)}${padding}`
    tree += `${row}\n`
  }

  return `${tree}${base}\n${base}`
}

console.log(createXmasTree(5, '*'))
console.log(createXmasTree(3, '+'))
console.log(createXmasTree(6, '@'))
console.log(createXmasTree(10, 'o'))
