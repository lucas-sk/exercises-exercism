export function decodedResistorValue([color1, color2, color3]: string[]) {
  const resitorValueInNumber = Number(`${band[color1]}${band[color2]}${'0'.repeat(band[color3])}`)

  const gigaohms = 1_000_000_000
  const megaohms = 1_000_000
  const kiloohms = 1_000

  let resitorValue
  if (resitorValueInNumber > gigaohms) {
    resitorValue = resitorValueInNumber / gigaohms
    return `${resitorValue} gigaohms`
  }

  if (resitorValueInNumber > megaohms) {
    resitorValue = resitorValueInNumber / megaohms
    return `${resitorValue} megaohms`
  }

  if (resitorValueInNumber > kiloohms) {
    resitorValue = resitorValueInNumber / kiloohms
    return `${resitorValue} kiloohms`
  }

  resitorValue = resitorValueInNumber

  return `${resitorValue} ohms`
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

console.log(decodedResistorValue(['orange', 'orange', 'black'])) // 33 ohms
console.log(decodedResistorValue(['blue', 'grey', 'brown'])) // 68 ohms
console.log(decodedResistorValue(['red', 'black', 'red'])) // 2 kiloohms
console.log(decodedResistorValue(['green', 'brown', 'orange'])) // 51 kiloohms
console.log(decodedResistorValue(['yellow', 'violet', 'yellow'])) // 470 kiloohms
console.log(decodedResistorValue(['blue', 'violet', 'blue'])) // 67 megaohms
console.log(decodedResistorValue(['black', 'black', 'black'])) // 0 ohms
console.log(decodedResistorValue(['white', 'white', 'white'])) // 99 gigaohms
console.log(decodedResistorValue(['black', 'grey', 'black'])) // 8 ohms
console.log(decodedResistorValue(['blue', 'green', 'yellow', 'orange'])) // 650 kiloohms