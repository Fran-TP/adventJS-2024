function findInAgenda(
  agenda: string,
  phone: string
): { name: string; address: string } | null {
  const regExpUserName = /<(.+)>/i
  const regExpUserPhone = /(\+\d+-\d+-\d+-\d+)/

  const splittedAgenda = agenda.split('\n')

  const users: { name: string; address: string }[] = []

  for (const line of splittedAgenda) {
    const name = line.match(regExpUserName)
    const userPhone = line.match(regExpUserPhone)?.[1]

    const address = line.replace(name?.[0], '').replace(userPhone, '').trim()

    // don't return the first match, because more than one user can have the same phone number

    if (userPhone?.includes(phone)) {
      users.push({ name: name[1], address })
    }
  }

  return users.length === 1 ? users[0] : null
}

const agenda = `+34-600-123-456 Calle Gran Via 12 <Juan Perez>
Plaza Mayor 45 Madrid 28013 <Maria Gomez> +34-600-987-654
<Carlos Ruiz> +1-800-555-0199 Fifth Ave New York`

console.log(findInAgenda(agenda, '34-600-123-456'))
// { name: "Juan Perez", address: "Calle Gran Via 12" }

console.log(findInAgenda(agenda, '600-987'))
// { name: "Maria Gomez", address: "Plaza Mayor 45 Madrid 28013" }

console.log(findInAgenda(agenda, '111'))
// null
// Explanation: No results

console.log(findInAgenda(agenda, '1'))
// null
// Explanation: Too many results
