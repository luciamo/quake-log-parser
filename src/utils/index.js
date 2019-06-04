const secondsHandler = (seconds) => seconds >= 10 ? seconds : `0${seconds}`

export function getTimeInMinutesAndSeconds(time) {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return `${minutes}:${secondsHandler(seconds)}`;
}
