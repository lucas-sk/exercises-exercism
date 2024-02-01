export class Triangle {
  sides: number[]

  constructor(...sides: number[]) {
    this.sides = sides
  }

  get isEquilateral() {
    const isAllSidesHaveLengthEqual = this.sides.every((item) => {
      if (item === 0) return false

      return item === this.sides[0]
    })

    return isAllSidesHaveLengthEqual
  }

  get isIsosceles() {
    const [sideA, sideB, sideC]  = this.sides

    const isAllSidesHaveLengthEqual = this.isEquilateral
    const isAllSidesHaveLengthDifferent = this.isScalene

    const isPlusSideASideBBiggerOrEqualSideC =  (sideA + sideB) >= sideC
    const isPlusSideBSideCBiggerOrEqualSideA =  (sideB + sideC) >= sideA
    const isPlusSideASideCBiggerOrEqualSideB =  (sideA + sideC) >= sideB
    const isTriangle = isPlusSideASideBBiggerOrEqualSideC && isPlusSideBSideCBiggerOrEqualSideA && isPlusSideASideCBiggerOrEqualSideB

    if (!isTriangle){
      return isTriangle
    }

    return isAllSidesHaveLengthEqual || !isAllSidesHaveLengthDifferent
  }

  get isScalene() {

    const [sideA, sideB, sideC]  = this.sides
    const isPlusSideASideBBiggerOrEqualSideC =  (sideA + sideB) >= sideC
    const isPlusSideBSideCBiggerOrEqualSideA =  (sideB + sideC) >= sideA
    const isPlusSideASideCBiggerOrEqualSideB =  (sideA + sideC) >= sideB
    const isTriangle = isPlusSideASideBBiggerOrEqualSideC && isPlusSideBSideCBiggerOrEqualSideA && isPlusSideASideCBiggerOrEqualSideB

    if (!isTriangle){
      return isTriangle
    }

    const isSideADifferentSideB = sideA !== sideB
    const isSideADifferentSideC = sideA !== sideC
    const isSideBDifferentSideC = sideB !== sideC
    const isAllSidesHaveLengthDifferent = isSideADifferentSideB && isSideADifferentSideC && isSideBDifferentSideC

    return isAllSidesHaveLengthDifferent
  }
}
