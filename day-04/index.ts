import loadInput from './input.ts'
import solver from './solver.ts'

export default async function main (dayName: string) {
  const passports = await loadInput()

  console.time(dayName)
  solver(passports)
  console.timeEnd(dayName)
}
