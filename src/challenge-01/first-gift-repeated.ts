export function firstGiftRepeated(gifts: number[]): number[] {
  return [...new Set(gifts)].sort((a, b) => a - b)
}
