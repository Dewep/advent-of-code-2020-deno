function countNumberOfTrees (map: string[], offsetX: number, offsetY: number) {
  const sizeX = map[0].length
  const sizeY = map.length

  const currentPos = { x: 0, y: 0 }
  let numberOfTrees = 0

  while (currentPos.y + offsetY < sizeY) {
    currentPos.x = (currentPos.x + offsetX) % sizeX
    currentPos.y += offsetY

    if (map[currentPos.y][currentPos.x] === '#') {
      numberOfTrees += 1
    }
  }

  return numberOfTrees
}

export default function solver (map: string[]) {
  const numberOfTreesX1Y1 = countNumberOfTrees(map, 1, 1)
  const numberOfTreesX3Y1 = countNumberOfTrees(map, 3, 1)
  const numberOfTreesX5Y1 = countNumberOfTrees(map, 5, 1)
  const numberOfTreesX7Y1 = countNumberOfTrees(map, 7, 1)
  const numberOfTreesX1Y2 = countNumberOfTrees(map, 1, 2)

  console.log('Part 1:', numberOfTreesX3Y1)
  console.log('Part 2:', numberOfTreesX1Y1 * numberOfTreesX3Y1 * numberOfTreesX5Y1 * numberOfTreesX7Y1 * numberOfTreesX1Y2)
}
