function getSeatId (pass: string): number {
  const row = parseInt(pass.substr(0, 8).replace(/B/g, '1').replace(/F/g, '0'), 2)
  const col = parseInt(pass.substr(7, 3).replace(/R/g, '1').replace(/L/g, '0'), 2)

  const seatId = row * 8 + col
  return seatId
}

export default function solver (passes: string[]) {
  let highestSeatId = 0
  const seats: number[] = []

  for (const pass of passes) {
    const seatId = getSeatId(pass)

    if (seatId > highestSeatId) {
      highestSeatId = seatId
    }

    seats.push(seatId)
  }

  seats.sort((a, b) => a - b)
  let missingSeatId = seats[0]
  for (let index = 1; index < seats.length; index++) {
    missingSeatId += 1

    if (seats[index] !== missingSeatId) {
      break
    }
  }

  console.log('Part 1:', highestSeatId)
  console.log('Part 2:', missingSeatId)
}
