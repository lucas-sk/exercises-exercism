/**
 * recebe uma string
 * salva ela na propriedade da classe para ser utilizada depois
 * no metódo matches:
 * retorna um array filtrado
 * se tiver na mesma ordem da palavra não retorna dentro do array
 * tem que possui a mesma letras na mesma frequência
*/
export class Anagram {
  text: string
  constructor(input: string) {
    this.text = input
  }

  public matches(...potentials: Array<string>): Array<string> {
    const textInLowerCase = this.text.toLowerCase()
    const listPotentialsFiltered = potentials.filter((textPotential) => {
      const textPotentialInLowerCase = textPotential.toLowerCase()

      if (textPotentialInLowerCase.length !== textInLowerCase.length) {
        return false
      }
      if (textPotentialInLowerCase === textInLowerCase){
        return false
      }

      const textPotentialInArray = textPotentialInLowerCase.split('')
      const textMap: Map<string, number> = new Map()
      const textPotentialMap: Map<string, number> = new Map()

      for (const letter of textPotentialInArray){
        const isExistInsideMap = textPotentialMap.get(letter)
        if (isExistInsideMap){
          textPotentialMap.set(letter, isExistInsideMap + 1);
        } else {
          textPotentialMap.set(letter, 1)
        }
      }

      for (const letter of textInLowerCase){
        const isExistInsideMap = textMap.get(letter)
        if (isExistInsideMap){
          textMap.set(letter, isExistInsideMap + 1);
        } else {
          textMap.set(letter, 1)
        }
      }

      for(const item of textPotentialMap){
        if (item[1] !== textMap.get(item[0])){
          return false
        }
      }

      return textPotential
    })

    return listPotentialsFiltered
  }
}
