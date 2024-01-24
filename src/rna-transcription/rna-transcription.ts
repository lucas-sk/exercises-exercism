const ListNucleotidesDNA = ['G', 'C', 'T', 'A']
const ListNucleotidesRNA = ['C', 'G', 'A', 'U']

export function toRna(dna: string) {
  const arrayDNA = dna.split('')
  const isExistNucleotide = arrayDNA.every(dna => {
    return ListNucleotidesDNA.includes(dna)
  })
  if (!isExistNucleotide){
    throw new Error('Invalid input DNA.')
  }

  const transcriptionToRNA = arrayDNA.reduce((acc, dna) => {
    const index = ListNucleotidesDNA.indexOf(dna)

    return acc + ListNucleotidesRNA[index]
  }, '')

  return transcriptionToRNA
}
   console.log(toRna('C')) // 'G'
   console.log(toRna('G')) // 'C'
   console.log(toRna('A')) // 'U'
   console.log(toRna('T')) // 'A'
  console.log(toRna('ACGTGGTCTTAA')) // 'UGCACCAGAAUU'
  console.log(toRna('U')) // 'Invalid input DNA.'
  console.log(toRna('XXX')) // 'Invalid input DNA.'
  console.log(toRna('ACGTXXXCTTAA')) // 'Invalid input DNA.'
