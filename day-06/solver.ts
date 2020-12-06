function countYes (group: string[]): number {
  const found: string[] = []

  for (const people of group) {
    for (let index = 0; index < people.length; index++) {
      const letter = people[index]
      if (!found.includes(letter)) {
        found.push(letter)
      }
    }
  }

  return found.length
}

function countCommonYes (group: string[]): number {
  let found: string[] = []

  for (let index = 0; index < group[0].length; index++) {
    const letter = group[0][index]
    if (!found.includes(letter)) {
      found.push(letter)
    }
  }

  for (let pId = 1; pId < group.length; pId++) {
    found = found.filter(letter => group[pId].includes(letter))
  }

  return found.length
}

export default function solver (groups: string[][]) {
  let sumOfYes = 0
  let sumOfCommonYes = 0

  for (const group of groups) {
    sumOfYes += countYes(group)
    sumOfCommonYes += countCommonYes(group)
  }

  console.log('Part 1:', sumOfYes)
  console.log('Part 2:', sumOfCommonYes)
}
