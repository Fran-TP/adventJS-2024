function decodeFilename(filename: string): string {
  const nameAndExtensionRegex = /_([a-z-_]+)(\.\w+)/i
  const [_, baseFilename, extension] = filename.match(nameAndExtensionRegex)

  return baseFilename + extension
}

console.log(decodeFilename('2023122512345678_sleighDesign.png.grinchwa'))
// ➞ "sleighDesign.png"

console.log(decodeFilename('42_chimney_dimensions.pdf.hack2023'))
// ➞ "chimney_dimensions.pdf"

console.log(decodeFilename('987654321_elf-roster.csv.tempfile'))
// ➞ "elf-roster.csv"
