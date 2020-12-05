export default function solver (passwords: { min: number, max: number, char: string, password: string }[]) {
  let numberOfValidsRuleOne = 0
  let numberOfValidsRuleTwo = 0

  for (const passwordPolicy of passwords) {
    const charOccurrence = passwordPolicy.password.split(passwordPolicy.char).length - 1

    if (passwordPolicy.min <= charOccurrence && charOccurrence <= passwordPolicy.max) {
      numberOfValidsRuleOne += 1
    }

    const charA = passwordPolicy.password[passwordPolicy.min - 1]
    const charB = passwordPolicy.password[passwordPolicy.max - 1]

    if (charA !== charB && (charA === passwordPolicy.char || charB === passwordPolicy.char)) {
      numberOfValidsRuleTwo += 1
    }
  }

  console.log('Part 1:', numberOfValidsRuleOne)
  console.log('Part 2:', numberOfValidsRuleTwo)
}
