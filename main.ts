async function main () {
  if (!Deno.args.length) {
    throw new Error('Missing day argument!')
  }

  const dayNumber = +Deno.args[0]

  if (dayNumber < 1 || dayNumber > 4) {
    throw new Error('Argument must be a day number between 1 and 4.')
  }

  const dayName = `day-${dayNumber < 10 ? '0' : ''}${dayNumber}`
  const mainDay = await import(`./${dayName}/index.ts`)

  await mainDay.default(dayName)
}

export default main
