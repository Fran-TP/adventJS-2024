function fixGiftList(
  received: string[],
  expected: string[]
): { missing: Record<string, number>; extra: Record<string, number> } {
  const items = new Set([...received.concat(expected)])
  const expectedCount: Record<string, number> = expected.reduce(
    (acc, curr) => ((acc[curr] ??= 0), ++acc[curr], acc),
    {}
  )

  const receivedCount: Record<string, number> = received.reduce(
    (acc, curr) => ((acc[curr] ??= 0), ++acc[curr], acc),
    {}
  )

  const result = {
    missing: {},
    extra: {},
    valid: {}
  }

  const mapResult = {
    '1': 'extra',
    '-1': 'missing',
    '0': 'valid'
  }

  for (const item of items) {
    const total = ~~receivedCount[item] - ~~expectedCount[item]
    const sign = Math.sign(total)

    result[mapResult[sign]][item] = Math.abs(total)
  }

  return { missing: result.missing, extra: result.extra }
}
