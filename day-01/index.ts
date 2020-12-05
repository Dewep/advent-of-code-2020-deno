import input from './input.ts'
import solver from './solver.ts'

export default async function main (dayName: string) {
  console.time(dayName)
  solver(input)
  console.timeEnd(dayName)
}
