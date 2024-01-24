/*
Mercury: orbital period 0.2408467 Earth years
Venus: orbital period 0.61519726 Earth years
Earth: orbital period 1.0 Earth years, 365.25 Earth days, or 31557600 seconds
Mars: orbital period 1.8808158 Earth years
Jupiter: orbital period 11.862615 Earth years
Saturn: orbital period 29.447498 Earth years
Uranus: orbital period 84.016846 Earth years
Neptune: orbital period 164.79132 Earth years
*/

interface IPlanetAndPeriod {
  planet: string,
  seconds: number
}

const listPlanetAndPeriodRelationEarth: Array<IPlanetAndPeriod> = [
  {
    planet: 'mercury',
    seconds: 0.2408467
  },
  {
    planet: 'venus',
    seconds: 0.61519726
  },
  {
    planet: 'mars',
    seconds: 1.8808158
  },
  {
    planet: 'jupiter',
    seconds: 11.862615
  },
  {
    planet: 'saturn',
    seconds: 29.447498
  },
  {
    planet: 'uranus',
    seconds: 84.016846
  },
  {
    planet: 'neptune',
    seconds: 164.79132
  },
]

export function age(planet: string, seconds: number): number {
  const oneYearOfEarthInSeconds = 31_557_600

  if (planet.toLocaleLowerCase() === 'earth') {
    const fixedNumberDecimal = (seconds / oneYearOfEarthInSeconds).toFixed(2)

    return Number(fixedNumberDecimal)
  }

  const findIndexPlanet = listPlanetAndPeriodRelationEarth.findIndex((InfoItemPlanet) => InfoItemPlanet.planet === planet.toLocaleLowerCase())

  const periodPlanetRelationEarth = listPlanetAndPeriodRelationEarth[findIndexPlanet].seconds

  const calcAge = (seconds / (periodPlanetRelationEarth * oneYearOfEarthInSeconds)).toFixed(2)

  return Number(calcAge)
}

console.log(age('earth', 1000000000))   // 31.69
console.log(age('mercury', 2134835688)) // 280.88
console.log(age('venus', 189839836))    // 9.78
console.log(age('mars', 2129871239))    // 35.88
console.log(age('jupiter', 901876382))  // 2.41
console.log(age('saturn', 2000000000))  // 2.15
console.log(age('uranus', 1210123456))  // 0.46
console.log(age('neptune', 1821023456)) // 0.35
