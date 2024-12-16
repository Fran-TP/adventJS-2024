function drawTable(data: Array<Record<string, string | number>>): string {
  const capitalize = (str: string) => str.replace(str[0], str[0].toUpperCase())
  const [firstColHeader, secondColHeader] = Object.keys(data[0])

  const firstColLength = Math.max(
    firstColHeader.length,
    ...data.map(row => String(row[firstColHeader]).length)
  )

  const secondColLength = Math.max(
    secondColHeader.length,
    ...data.map(row => String(row[secondColHeader]).length)
  )

  const divider = `+${'-'.repeat(firstColLength + 2)}+${'-'.repeat(secondColLength + 2)}+`
  const header = `| ${capitalize(firstColHeader).padEnd(firstColLength)} | ${capitalize(secondColHeader).padEnd(secondColLength)} |`
  const rows = data.map(
    row =>
      `| ${String(row[firstColHeader]).padEnd(firstColLength)} | ${String(row[secondColHeader]).padEnd(secondColLength)} |`
  )

  return [divider, header, divider, ...rows, divider].join('\n')
}
