function hasMissingFields (passport: { [key: string]: string }): boolean {
  const fieldKeys = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'] // 'cid'

  for (const fieldKey of fieldKeys) {
    if (!passport[fieldKey]) {
      return true
    }
  }

  return false
}

function hasInvalidFields (passport: { [key: string]: string }): boolean {
  if (passport.byr.length !== 4 || +passport.byr < 1920 || +passport.byr > 2002) {
    return true
  }
  if (passport.iyr.length !== 4 || +passport.iyr < 2010 || +passport.iyr > 2020) {
    return true
  }
  if (passport.eyr.length !== 4 || +passport.eyr < 2020 || +passport.eyr > 2030) {
    return true
  }
  if (!passport.hgt.match(/^[1-9][0-9]{1,2}(cm|in)$/)) {
    return true
  }
  const hgt = +passport.hgt.substr(0, passport.hgt.length - 2)
  if (passport.hgt.endsWith('cm') && (hgt < 150 || hgt > 193)) {
    return true
  }
  if (passport.hgt.endsWith('in') && (hgt < 59 || hgt > 76)) {
    return true
  }
  if (!passport.hcl.match(/^#[a-f0-9]{6}$/i)) {
    return true
  }
  if (!['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].includes(passport.ecl)) {
    return true
  }
  if (!passport.pid.match(/^[0-9]{9}$/)) {
    return true
  }

  return false
}

export default function solver (passports: { [key: string]: string }[]) {
  let numberOfPassportsWithAllFields = 0
  let numberOfValidPassports = 0

  for (const passport of passports) {
    if (!hasMissingFields(passport)) {
      numberOfPassportsWithAllFields += 1

      if (!hasInvalidFields(passport)) {
        numberOfValidPassports += 1
      }
    }
  }

  console.log('Part 1:', numberOfPassportsWithAllFields)
  console.log('Part 2:', numberOfValidPassports)
}
