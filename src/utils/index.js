import { EXPIRE_TIME } from '../constants';
export const secondsHandler = (seconds) => seconds >= 10 ? seconds : `0${seconds}`

export function getTimeInMinutesAndSeconds(time) {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return `${minutes}:${secondsHandler(seconds)}`;
};

export function getTimeInSeconds(time) {
  const [ minutes, seconds ] = time.split(':');
  return minutes * 60 + parseInt(seconds);
};

export function getExpireTime(time) {
  const [ minutes, seconds ] = time.split(':');
  const expires = minutes * 60 + parseInt(seconds) + EXPIRE_TIME;
  const expireMinutes = Math.floor(expires / 60);
  const expireSeconds = secondsHandler(expires % 60);

  return `${expireMinutes}:${expireSeconds}`
};

export function isExpired(expireTime, time) {
  return getTimeInSeconds(expireTime) < getTimeInSeconds(time);
};
