export function count(text: string) {
  const regex = /\b[\w']+\b/g
  const textInLowerCase = text.toLowerCase()
  const matchesRegexText = textInLowerCase.match(regex)
  if (!matchesRegexText){
    return 'not found'
  }
  const wordsCounts: Map<string, number> = new Map();
  for (const item of matchesRegexText){
    const isExistInsideMap = wordsCounts.get(item)
    if (isExistInsideMap){
      wordsCounts.set(item, isExistInsideMap + 1);
    } else {
      wordsCounts.set(item, 1)
    }
  }

  return wordsCounts
}
