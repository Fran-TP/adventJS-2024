function removeSnow(s: string): string {
  const clearedPaths = new Set<string>()

  for (const char of s) {
    clearedPaths.delete(char) || clearedPaths.add(char)
  }

  return [...clearedPaths].join('')
}

console.log(removeSnow('zxxzoz')) // -> "oz"
// 1. Remove "xx", resulting in "zzoz"
// 2. Remove "zz", resulting in "oz"

console.log(removeSnow('abcdd')) // -> "abc"
// 1. Remove "dd", resulting in "abc"

console.log(removeSnow('zzz')) // -> "z"
// 1. Remove "zz", resulting in "z"

console.log(removeSnow('a')) // -> "a"
// No duplicate piles
