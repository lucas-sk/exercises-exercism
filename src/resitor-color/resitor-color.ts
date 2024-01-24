export const colorCode = (color: string) => {
  const code = COLORS.indexOf(color)

  return code
}

export const COLORS: string[] = [
  'black', 'brown', 'red', 'orange', 'yellow',
  'green', 'blue', 'violet', 'grey', 'white',
]