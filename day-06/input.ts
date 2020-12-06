export default async function loadInput () {
  const input = await Deno.readTextFile('./day-06/input.txt')

  const groups: string[][] = []

  for (const rawDetails of input.replace(/\r/g, '').split('\n\n')) {
    const people: string[] = rawDetails.split('\n')
    groups.push(people)
  }

  return groups
}
