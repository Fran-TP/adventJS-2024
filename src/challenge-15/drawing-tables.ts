function drawTable(data: Array<Record<string, string | number>>): string {
  const headers = Object.keys(data[0])

  const colsHeaderLength = {}

  for (const row of data) {
    for (const head in row) {
      colsHeaderLength[head] ??= head.length
      colsHeaderLength[head] = Math.max(
        colsHeaderLength[head],
        String(row[head]).length
      )
    }
  }

  let divider = '+'
  let header = '|'

  for (const head of headers) {
    divider += `${'-'.repeat(colsHeaderLength[head] + 2)}+`

    header += ` ${
      head[0].toUpperCase() + head.slice(1).padEnd(colsHeaderLength[head] - 1)
    } |`
  }

  let rows = ''

  for (const row of data) {
    let rowStr = '|'

    for (const head of headers) {
      rowStr += ` ${String(row[head]).padEnd(colsHeaderLength[head])} |`
    }

    rows += `${rowStr}\n`
  }

  return `${divider}\n${header}\n${divider}\n${rows}${divider}`
}

console.log(
  drawTable([
    { name: 'Alice', city: 'London' },
    { name: 'Bob', city: 'Paris' },
    { name: 'Charlie', city: 'New York' }
  ])
)

console.log(
  drawTable([
    { gift: 'Doll', quantity: 10 },
    { gift: 'Book', quantity: 5 },
    { gift: 'Music CD', quantity: 1 }
  ])
)

console.log(
  drawTable([
    { name: 'Alice', city: 'London', age: 25 },
    { name: 'Bob', city: 'Paris', age: 30 },
    { name: 'Charlie', city: 'New York', age: 35 }
  ])
)
