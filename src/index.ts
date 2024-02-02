export function isIsogram(text: string): boolean {
  if (text.length === 0){

    return true
  }

  const textInLowerCase = text.toLowerCase()
  const regex = /\w/g
  const isMatchesWithRegex = textInLowerCase.match(regex)

  if (!isMatchesWithRegex){
    return false
  }

  const verifyIsUniqueLetter = new Set(isMatchesWithRegex)

  return verifyIsUniqueLetter.size === isMatchesWithRegex?.length
}
