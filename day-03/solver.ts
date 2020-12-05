export default function solver (map: string[]) {
  const sizeX = map[0].length
  const sizeY = map.length

  const currentPos = { x: 0, y: 0 }
  let numberOfTrees = 0

  while (currentPos.y + 1 < sizeY) {
    currentPos.x = (currentPos.x + 3) % sizeX
    currentPos.y += 1

    if (map[currentPos.y][currentPos.x] === '#') {
      numberOfTrees += 1
    }
  }

  console.log('Part 1:', numberOfTrees)
}
