import { getTimeInMinutesAndSeconds, getTimeInSeconds, secondsHandler, getExpireTime, isExpired } from '../utils';

test('secondsHandler Converts 9 to 09', () => {
  expect(secondsHandler('9')).toBe('09');
});

test('getTimeInMinutesAndSeconds Converts 300 seconds to 5:00', () => {
  expect(getTimeInMinutesAndSeconds('300')).toBe('5:00');
});

test('getTimeInSeconds Converts 5:00 to 300 seconds', () => {
  expect(getTimeInSeconds('5:00')).toBe(300);
});

test('getExpireTime Get expire time by adding 3 minutes to time', () => {
  expect(getExpireTime('2:34')).toBe('5:34');
});

test('isExpired Checks if weapon is expired', () => {
  expect(isExpired('3:00','5:00')).toBe(true);
  expect(isExpired('5:00', '3:00')).toBe(false);
})
