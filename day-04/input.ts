export default async function loadInput () {
  const input = await Deno.readTextFile('./day-04/input.txt')

  const passports: { [key: string]: string }[] = []

  for (const rawDetails of input.replace(/\r/g, '').split('\n\n')) {
    const passport: { [key: string]: string } = {}

    for (const detail of rawDetails.split(/[\n ]/)) {
      const [key, value] = detail.split(':')
      passport[key] = value
    }

    passports.push(passport)
  }

  return passports
}
