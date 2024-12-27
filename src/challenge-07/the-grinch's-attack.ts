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

// solution with regex
function fixPackagesRegex(packages: string): string {
  let packagesClone = packages
  const parenthesisMatchRegex = /\((\w*)\)/
  while (packagesClone.includes('(')) {
    packagesClone = packagesClone.replace(parenthesisMatchRegex, (_, group) =>
      [...group].reverse().join('')
    )
  }

  return packagesClone
}

console.log(fixPackages('a(cb)de'))
// ➞ "abcde"
// We reverse "cb" inside the parentheses

console.log(fixPackages('a(bc(def)g)h'))
// ➞ "agdefcbh"
// 1st we reverse "def" → "fed", then we reverse "bcfedg" → "gdefcb"

console.log(fixPackages('abc(def(gh)i)jk'))
// ➞ "abcighfedjk"
// 1st we reverse "gh" → "hg", then "defhgi" → "ighfed"

console.log(fixPackages('a(b(c))e'))
// ➞ "acbe"
// 1st we reverse "c" → "c", then "bc" → "cb"
