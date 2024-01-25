export class Clock {
  _hour: number
  _minute?: number
  _totalInMinutes: number

  constructor(hour: number, minute?: number) {
    this._totalInMinutes = this.setTotalInMinutes(hour, minute)
    this._hour = this.setHour(this._totalInMinutes)
    this._minute = this.setMinutes(this._totalInMinutes)
  }

  setTotalInMinutes(hour: number, minute?: number){
    const initialHours = new Date(0,0,0,hour).getHours()
    if (!minute){
      return initialHours * 60
    }
    return initialHours * 60 + minute
  }

  setHour(totalInMinutes: number){
    return new Date(0,0,0,0,totalInMinutes).getHours()
  }

  setMinutes(totalInMinutes: number){
    return new Date(0,0,0,0,totalInMinutes).getMinutes()
  }

  public toString(): string {
    const hoursInString = this._hour.toString().padStart(2, '0')
    const minutesInString = this._minute?.toString().padStart(2,'0')
    return `${hoursInString}:${minutesInString}`
  }

  public plus(minutes: number): Clock {
    const totalInMinutes = this._totalInMinutes + minutes
    const newHours = this.setHour(totalInMinutes)
    const newMinutes = this.setMinutes(totalInMinutes)
    return new Clock(newHours,newMinutes)
  }

  public minus(minutes: number): Clock {
    const totalInMinutes = this._totalInMinutes - minutes
    const newHours = this.setHour(totalInMinutes)
    const newMinutes = this.setMinutes(totalInMinutes)
    return new Clock(newHours,newMinutes)
  }

  public equals(other: Clock): boolean {
    const isHoursEquals = other._hour === this._hour
    const isMinutesEquals = this._minute === other._minute
    return isHoursEquals && isMinutesEquals
  }
}

