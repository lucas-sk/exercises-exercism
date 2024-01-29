export function reverse(text: string) {
  const textInArray = text.split('')
  const reverseTextInArray = textInArray.reverse()
  return reverseTextInArray.join('')
}
