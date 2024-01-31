export function convert(number: number) {
  let numberConvert = ''
  const isNumberModuloThree = number % 3 === 0
  const isNumberModuloFive = number % 5 === 0
  const isNumberModuloSeven = number % 7 === 0
  const isNumberNotModuloThreeFiveSeven = !isNumberModuloThree && !isNumberModuloFive && !isNumberModuloSeven

  if (isNumberModuloThree) {
    numberConvert += 'Pling'
  }
  if (isNumberModuloFive) {
    numberConvert += 'Plang'
  }
  if (isNumberModuloSeven) {
    numberConvert += 'Plong'
  }
  if (isNumberNotModuloThreeFiveSeven){
    numberConvert += `${number}`
  }

  return numberConvert
}
