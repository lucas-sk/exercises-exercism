export class DnDCharacter {
  hitpoints: number
  strength: number
  dexterity: number
  constitution: number
  intelligence: number
  wisdom: number
  charisma: number

  constructor(){
    this.constitution = DnDCharacter.generateAbilityScore() // Ex: 3 constitution - 10 / 2 = -4 | hitpoints - 4 = 6
    this.hitpoints =  10 + DnDCharacter.getModifierFor(this.constitution)
    this.strength = DnDCharacter.generateAbilityScore()
    this.dexterity = DnDCharacter.generateAbilityScore()
    this.intelligence = DnDCharacter.generateAbilityScore()
    this.wisdom = DnDCharacter.generateAbilityScore()
    this.charisma = DnDCharacter.generateAbilityScore()
  }


  public static generateAbilityScore(): number {
    const valueOfDice: number[] = []

    let TimesThrewTheDice
    let MaximumTimes = 4
    for (TimesThrewTheDice = 0; TimesThrewTheDice< MaximumTimes; TimesThrewTheDice++){
      valueOfDice.push(this.throwDice())
    }
    const [firstValue, secondValue, thirdValue] = valueOfDice.sort((a,b) => b-a)

    return firstValue + secondValue + thirdValue
  }

  public static throwDice(){
    return Math.floor(Math.random() * (7 - 1) + 1)
  }

  public static getModifierFor(abilityValue: number): number {

    return Math.floor((abilityValue - 10) / 2)
  }
}