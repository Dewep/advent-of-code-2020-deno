import loadInput from './input.ts'
import solver from './solver.ts'

export default async function main (dayName: string) {
  const groups = await loadInput()

  console.time(dayName)
  solver(groups)
  console.timeEnd(dayName)
}
