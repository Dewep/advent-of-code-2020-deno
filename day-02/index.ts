import loadInput from './input.ts'
import solver from './solver.ts'

export default async function main (dayName: string) {
  const input = await loadInput()

  console.time(dayName)
  solver(input)
  console.timeEnd(dayName)
}
