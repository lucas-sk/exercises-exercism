export function isIsogram(text: string): boolean {
  const textInLowerCase = text.toLowerCase()
  const removesSpecialCharacters = textInLowerCase.replace(/\W/g, '')
  const listLetters = removesSpecialCharacters.split('')
  const uniqueLettersSet  = new Set(listLetters)
  return uniqueLettersSet .size === listLetters.length
}
