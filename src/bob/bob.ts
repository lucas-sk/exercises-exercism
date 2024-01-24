export function hey(message: string): string {
  const regex = /[A-Z]/gi;
  const found = message.match(regex);
  const isQuestion = message.trim().endsWith("?")


  if (!found) {
    if (isQuestion){
      return "Sure."
    }
    const hasNumber = message.match(/[0-9]/gi)
    if (hasNumber){
      return "Whatever."
    }
    return "Fine. Be that way!"
  }

  const isQuestionUpperCase = message === message.toUpperCase() && isQuestion
  const isUpperCase = found.length && message === message.toUpperCase()

  if (isQuestionUpperCase){
    return "Calm down, I know what I'm doing!"
  }
  if (isQuestion){
    return "Sure."
  }
  if (isUpperCase){
    return 'Whoa, chill out!'
  }
  return "Whatever."
}

// console.log(hey('WHAT THE HELL WERE YOU THINKING?'))
// console.log(hey('4?'))
// console.log(hey(''))
// console.log(hey('   '))
// console.log(hey('\t\t\t\t\t\t\t\t\t\t'))
console.log(hey('Okay if like my  spacebar  quite a bit?   '))
const result = hey('1, 2, 3')
console.log(result) // ('Whatever.')
const result1 = hey('4?')
console.log(result1) // ('Sure.')