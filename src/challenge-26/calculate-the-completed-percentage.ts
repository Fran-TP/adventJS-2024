function getCompleted(timeWorked: string, totalTime: string): string {
  const [hoursWorked, minutesWorked, secondsWorked] = timeWorked
    .split(':')
    .map(Number)
  const [totalHours, totalMinutes, totalSeconds] = totalTime
    .split(':')
    .map(Number)
  const workedInSeconds =
    hoursWorked * 3600 + minutesWorked * 60 + secondsWorked
  const totalInSeconds = totalHours * 3600 + totalMinutes * 60 + totalSeconds
  const percentage = Math.round((workedInSeconds / totalInSeconds) * 100)

  return `${percentage}%`
}
