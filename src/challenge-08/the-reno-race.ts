function drawRace(indices: number[], length: number): string {
  const len = indices.length
  const result = indices.map((position, idx) => {
    const padding = ' '.repeat(len - idx - 1)
    const raceLine = ` /${idx + 1}`
    const realIndex = ((position % length) + length) % length
    const reindeer = 'r'.slice(Number(!realIndex))

    const raceTrack = `${'~'.repeat(realIndex)}${reindeer}`.padEnd(length, '~')

    return padding + raceTrack + raceLine
  })

  return result.join('\n')
}

console.log(drawRace([0, 5, -3], 10))
/*
  ~~~~~~~~~~ /1
 ~~~~~r~~~~ /2
~~~~~~~r~~ /3
*/

console.log(drawRace([2, -1, 0, 5], 8))
/*
   ~~r~~~~~ /1
  ~~~~~~~r /2
 ~~~~~~~~ /3
~~~~~r~~ /4
*/

console.log(drawRace([3, 7, -2], 12))
/*
  ~~~r~~~~~~~~ /1
 ~~~~~~~r~~~~ /2
~~~~~~~~~~r~ /3
*/
