type TRoster = Record<number, string[]>

export class GradeSchool {
  private _roster: TRoster
  constructor(){
    this._roster = {} as TRoster
  }

  roster() {
    let roster: TRoster = {}
    for (let i in this._roster){
      roster[i] = [...this._roster[i]]
    }
    return roster
  }

  add(nameStudent: string, numberGrade: number) {
    const isExistGrade = this._roster[numberGrade]
    for(let i in this._roster){
      const grade = this.grade(Number(i))
      const isExistSameStudentThatGrade = grade.some((item) => item === nameStudent)
      if (isExistSameStudentThatGrade){
        this._roster[i] = this._roster[i].filter(item => item !== nameStudent)
        break
      }
    }
    if (!isExistGrade){
      this._roster[numberGrade] = [nameStudent]
      return
    }
    isExistGrade.push(nameStudent)
    isExistGrade.sort((a, b) => a.localeCompare(b))
  }

  grade(numberGrade: number) {
    const isExistGrade =  this._roster[numberGrade]
    if (!isExistGrade){
      return []
    }

    return [...isExistGrade]
  }
}

const school = new GradeSchool()
school.add('Aimee', 2)
const roster = school.roster()
try {
      roster[2].push('Oops.')
    } catch {
      /* empty */
    }
const expectedDb = { 2: ['Aimee'] }
console.log(school.roster())