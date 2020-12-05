import map from './input.ts'
import solver from './solver.ts'

export default async function main (dayName: string) {
  console.time(dayName)
  solver(map)
  console.timeEnd(dayName)
}
