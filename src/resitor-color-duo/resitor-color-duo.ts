export function decodedValue(colors: string[]) {
  let resultado: number[] = []

  colors.forEach((color, index) => {
    if (index > 1) return
    resultado.push(band[color])

  })

  return Number(resultado.join(''))
}

type BandI = Record<string, number>

export const band: BandI = {
  black: 0,
  brown: 1,
  red: 2,
  orange: 3,
  yellow: 4,
  green: 5,
  blue: 6,
  violet: 7,
  grey: 8,
  white: 9,
}

console.log(decodedValue(['brown', 'black']))
console.log(decodedValue(['green', 'brown', 'orange']))