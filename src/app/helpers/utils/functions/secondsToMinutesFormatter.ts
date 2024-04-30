export function secondsToMinutesFormatter(seconds: number) {
  const minuteInSeconds = 60;
  const minutes = seconds > 0 ? Math.floor(seconds / minuteInSeconds) : 0;
  const secondsRest = seconds > 0 ? Math.floor(seconds % minuteInSeconds) : 0;

  return String(
    `${minutes >= 10 ? minutes : '0' + minutes}:${
      secondsRest >= 10 ? secondsRest : '0' + secondsRest
    }`,
  ).replace('.', ':');
}
