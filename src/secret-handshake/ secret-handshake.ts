const secrets = ['wink','double blink','close your eyes','jump']

export function commands(number: number) {
  const numInBinary = number.toString(2).padStart(5, '0')
  const commandsHandshake: string[] = []

  if (numInBinary[4] === '1'){
    commandsHandshake.push(secrets[0])
  }
  if (numInBinary[3] === '1'){
    commandsHandshake.push(secrets[1])
  }
  if (numInBinary[2] === '1'){
    commandsHandshake.push(secrets[2])
  }
  if (numInBinary[1] === '1'){
    commandsHandshake.push(secrets[3])
  }
  if (numInBinary[0] === '1'){
    commandsHandshake.reverse()
  }

  return commandsHandshake
}
// secret-handshake.ts
