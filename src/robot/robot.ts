export class Robot {
  _name: string
  static listNames: string[] = []
  constructor() {
    this._name = this.generateName()
    Robot.listNames.push(this._name)
  }

  public get name(): string {
    return this._name
  }

  public resetName(): void {
    let newName = this.generateName()

    let isExistRobotSameName = Robot.listNames.every(item => item !== newName)

    while(!isExistRobotSameName){
      newName = this.generateName()
      isExistRobotSameName = Robot.listNames.every(item => item !== newName)
    }
    Robot.listNames.push(newName)
    this._name = newName
    return
  }

  public static releaseNames(): void {
    Robot.listNames = []
  }

  generateName(): string {
    let firstLetter = this.generateRandomLetter()
    let secondLetter = this.generateRandomLetter()
    let code = this.generateCode()
    let nameRobot = `${firstLetter}${secondLetter}${code}`
    let isExistRobotSameName = Robot.listNames.every(item => item !== nameRobot)

    while(!isExistRobotSameName){
      firstLetter = this.generateRandomLetter()
      secondLetter = this.generateRandomLetter()
      code = this.generateCode()
      nameRobot = `${firstLetter}${secondLetter}${code}`
      isExistRobotSameName = Robot.listNames.every(item => item !== nameRobot)
    }

    return nameRobot
  }
  generateRandomLetter(){
    // números de 97 a 122, que correspondem 'a' a 'z'
    // intervalo do loop para 65 a 90, que correspondem aos códigos ASCII dos caracteres ‘A’ a ‘Z’.
    const randomNumber = Math.floor(Math.random() * (90 - 64) + 65)
    return String.fromCodePoint(randomNumber)
  }
  generateCode(){
    const randomNumber = Math.floor(Math.random() * 1000)
    const randomNumberInString = String(randomNumber).padStart(3, '0')

    return randomNumberInString
  }
}

let robot = new Robot()
let robot1 = new Robot()
// robot1.resetName()

const NUMBER_OF_ROBOTS = 10000
const usedNames = new Set()
usedNames.add(robot.name)
for (let i = 0; i < NUMBER_OF_ROBOTS; i++) {
  robot.resetName()
  usedNames.add(robot.name)
}
console.log(usedNames.size)

