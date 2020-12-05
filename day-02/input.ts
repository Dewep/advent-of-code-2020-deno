export default async function loadInput () {
  const input = await Deno.readTextFile('./day-02/input.txt')

  const passwords: { min: number, max: number, char: string, password: string }[] = []

  for (const line of input.replace(/\r/g, '').split('\n')) {
    const [min, max, char, password] = line.split(/:?[- ]/)

    passwords.push({
      min: +min,
      max: +max,
      char,
      password
    })
  }

  return passwords
}
