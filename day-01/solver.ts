export default function solver (input: number[]) {
  input.sort((a, b) => a - b)

  let solutionAb = null
  let solutionAbc = null

  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      const a = input[i]
      const b = input[j]

      if (solutionAb === null && a + b === 2020) {
        solutionAb = a * b
      }

      if (solutionAbc === null) {
        for (let k = j + 1; k < input.length; k++) {
          const c = input[k]

          if (a + b + c === 2020) {
            solutionAbc = a * b * c
            break
          }
        }
      }

      if (solutionAb !== null && solutionAbc !== null) {
        console.log('Part 1:', solutionAb)
        console.log('Part 2:', solutionAbc)

        return
      }
    }
  }
}
