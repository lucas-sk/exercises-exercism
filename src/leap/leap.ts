export function isLeap(year: number) {
  const isDivisibleByFour = year % 4 === 0
  const isDivisibleByHundred = year % 100 === 0
  const isDivisibleByFourHundred  = year % 400 === 0

  const isDivisibleByFourPerHundred = isDivisibleByFour && isDivisibleByHundred
  const isDivisibleByFourByOneHundredAndFourHundred = isDivisibleByFourPerHundred && isDivisibleByFourHundred

  if (isDivisibleByFourByOneHundredAndFourHundred) return true
  if (isDivisibleByFourPerHundred) return false

  return isDivisibleByFour
}

  console.log(isLeap(2015)) // false
  console.log(isLeap(1970)) // false
  console.log(isLeap(1996)) // true
  console.log(isLeap(1960)) // true
  console.log(isLeap(2100)) // false
  console.log(isLeap(1900)) // false
  console.log(isLeap(2000)) // true
  console.log(isLeap(2400)) // true
  console.log(isLeap(1800)) // false