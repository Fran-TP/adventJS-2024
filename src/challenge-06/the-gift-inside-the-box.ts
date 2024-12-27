function inBox(box: string[]): boolean {
  return box
    .slice(1, box.length - 1)
    .some(line => line.split('#')[1].includes('*'))
}

console.log(inBox(['###', '#*#', '###'])) // ➞ true

console.log(inBox(['####', '#* #', '#  #', '####'])) // ➞ true

console.log(inBox(['#####', '#   #', '#  #*', '#####'])) // ➞ false

console.log(inBox(['#####', '#   #', '#   #', '#   #', '#####'])) // ➞ false
